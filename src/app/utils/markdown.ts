import 'server-only'

import { readFile } from 'node:fs/promises'
import path from 'node:path'

const contentDirectory = path.join(process.cwd(), 'src', 'content')

export const readMarkdown = async (contentPath: string): Promise<string> => {
  const filePath = path.join(contentDirectory, contentPath)
  const relativePath = path.relative(contentDirectory, filePath)

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    throw new Error(`Markdown content must be inside ${contentDirectory}: ${contentPath}`)
  }

  return readFile(filePath, 'utf8')
}
