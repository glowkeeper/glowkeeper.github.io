import { notFound } from 'next/navigation'

import { BookReader } from '@/app/components/BookReader'
import { allBookParams, readBookContent } from '@/app/utils/bookRegistry'
import { createPageMetadata } from '@/app/utils/metadata'

export const generateStaticParams = allBookParams

type BookChapterProps = {
  params: Promise<{ chapter: string[]; path: string }>
}

export const generateMetadata = async ({ params }: BookChapterProps) => {
  const { chapter, path } = await params
  const book = await readBookContent(path, chapter.join('/'))
  if (!book) return {}

  return createPageMetadata({
    title: `${book.entry.title} · ${book.manifest.title}`,
    description: `${book.entry.title}, from ${book.manifest.title} by Dr Steve Huckle.`,
    path: `/writing/books/${path}/${chapter.join('/')}`,
  })
}

const BookChapterPage = async ({ params }: BookChapterProps) => {
  const { chapter, path } = await params
  const book = await readBookContent(path, chapter.join('/'))
  if (!book) notFound()

  return <BookReader content={book.content} current={book.entry} manifest={book.manifest} />
}

export default BookChapterPage
