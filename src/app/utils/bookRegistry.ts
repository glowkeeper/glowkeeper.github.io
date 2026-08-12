import { readFile } from 'node:fs/promises'
import path from 'node:path'

export type BookEntry = {
  depth: number
  file: string
  route: string
  title: string
}

export type BookManifest = {
  entries: BookEntry[]
  slug: string
  title: string
}

const bookSlugs = ['on-slender-strings', 'when-the-fire-burns-low'] as const

export const isBookSlug = (slug: string): slug is typeof bookSlugs[number] => (
  bookSlugs.includes(slug as typeof bookSlugs[number])
)

const bookDirectory = (slug: string) => path.join(
  process.cwd(), 'src', 'content', 'writing', 'books', slug
)

export const readBookManifest = async (slug: string): Promise<BookManifest | null> => {
  if (!isBookSlug(slug)) return null
  return JSON.parse(await readFile(path.join(bookDirectory(slug), 'index.json'), 'utf8')) as BookManifest
}

export const readBookContent = async (slug: string, route = '') => {
  const manifest = await readBookManifest(slug)
  const entry = manifest?.entries.find(item => item.route === route)
  if (!manifest || !entry) return null

  return {
    content: await readFile(path.join(bookDirectory(slug), entry.file), 'utf8'),
    entry,
    manifest,
  }
}

export const allBookParams = async () => {
  const manifests = await Promise.all(bookSlugs.map(readBookManifest))
  return manifests.flatMap(manifest => manifest?.entries
    .filter(entry => entry.route)
    .map(entry => ({ chapter: entry.route.split('/'), path: manifest.slug })) ?? [])
}
