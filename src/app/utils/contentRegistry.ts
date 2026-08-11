import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'

import { siteSections } from '@/app/config'

const contentDirectory = path.join(process.cwd(), 'src', 'content')

export const allowedDrafts = new Set([
  'writing/stories/millwrightReview.md',
])

const collectMarkdownFiles = async (directory: string): Promise<string[]> => {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(async entry => {
    const entryPath = path.join(directory, entry.name)
    return entry.isDirectory()
      ? collectMarkdownFiles(entryPath)
      : entry.name.endsWith('.md') ? [entryPath] : []
  }))

  return files.flat()
}

const duplicates = (values: string[]): string[] => {
  const seen = new Set<string>()
  const repeated = new Set<string>()

  values.forEach(value => {
    if (seen.has(value)) repeated.add(value)
    seen.add(value)
  })

  return [...repeated].sort()
}

export const validateContentRegistry = async (): Promise<void> => {
  const items = Object.values(siteSections).flatMap(section =>
    section.siteSections.flatMap(subSection =>
      Object.values(subSection.content).map(item => ({
        content: item.content,
        id: item.id,
        route: `${subSection.path}/${item.endPoint}`,
      }))
    )
  )
  const errors: string[] = []

  const duplicateIds = duplicates(items.map(item => item.id))
  const duplicateRoutes = duplicates(items.map(item => item.route))
  const duplicateContent = duplicates(items.map(item => item.content))

  if (duplicateIds.length) errors.push(`Duplicate content IDs: ${duplicateIds.join(', ')}`)
  if (duplicateRoutes.length) errors.push(`Duplicate routes: ${duplicateRoutes.join(', ')}`)
  if (duplicateContent.length) errors.push(`Markdown registered more than once: ${duplicateContent.join(', ')}`)

  const missing = await Promise.all(items.map(async item => {
    try {
      const file = await stat(path.join(contentDirectory, item.content))
      return file.isFile() ? null : item.content
    } catch {
      return item.content
    }
  }))
  const missingFiles = missing.filter((file): file is string => file !== null)
  if (missingFiles.length) errors.push(`Missing Markdown files: ${missingFiles.join(', ')}`)

  const registered = new Set(items.map(item => item.content))
  const markdownFiles = (await collectMarkdownFiles(contentDirectory))
    .map(file => path.relative(contentDirectory, file).split(path.sep).join('/'))
  const unregistered = markdownFiles.filter(file => !registered.has(file) && !allowedDrafts.has(file))
  if (unregistered.length) errors.push(`Unregistered Markdown files: ${unregistered.join(', ')}`)

  const missingDrafts = [...allowedDrafts].filter(file => !markdownFiles.includes(file))
  if (missingDrafts.length) errors.push(`Allowed drafts no longer exist: ${missingDrafts.join(', ')}`)

  const assetReferences = new Set<string>()
  await Promise.all(markdownFiles.map(async file => {
    const markdown = await readFile(path.join(contentDirectory, file), 'utf8')
    for (const match of markdown.matchAll(/\/assets\/[A-Za-z0-9._%/-]+/g)) {
      assetReferences.add(match[0])
    }
  }))
  const missingAssets = (await Promise.all([...assetReferences].map(async asset => {
    try {
      const file = await stat(path.join(process.cwd(), 'public', asset))
      return file.isFile() ? null : asset
    } catch {
      return asset
    }
  }))).filter((asset): asset is string => asset !== null)
  if (missingAssets.length) errors.push(`Missing linked assets: ${missingAssets.join(', ')}`)

  if (errors.length) {
    throw new Error(`Content registry validation failed:\n- ${errors.join('\n- ')}`)
  }
}
