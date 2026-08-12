import { ContentPage } from '@/app/components/ContentPage'
import { BookReader } from '@/app/components/BookReader'

import { siteSections, WritingSections } from '@/app/config'
import { createContentMetadataGenerator, createPageMetadata } from '@/app/utils/metadata'
import { readBookContent } from '@/app/utils/bookRegistry'
import { bookEntryDescription, onSlenderStringsKeywords } from '@/app/utils/bookSeo'

const section = siteSections.writing.siteSections[WritingSections.books]

export const generateMetadata = async ({ params }: { params: Promise<{ path: string }> }) => {
  const { path } = await params
  const book = await readBookContent(path)
  if (!book) return createContentMetadataGenerator(section)({ params: Promise.resolve({ path }) })

  return createPageMetadata({
    title: book.manifest.title,
    description: bookEntryDescription(book.manifest, book.entry),
    keywords: path === 'on-slender-strings' ? onSlenderStringsKeywords : undefined,
    openGraphType: path === 'on-slender-strings' ? 'article' : 'website',
    path: `/writing/books/${path}`,
  })
}

export function generateStaticParams() {

  const paths = Object.keys(siteSections.writing.siteSections[WritingSections.books].content).map(item => {
    //console.log('book', book)
    const path = siteSections.writing.siteSections[WritingSections.books].content[item].endPoint
    return { path: path }
  })
  //console.log('paths', paths)
  return paths
}

const BooksPage = async ({
  params,
}: {
  params: Promise<{ path: string }>
}) => {
  const { path } = await params

  const book = await readBookContent(path)
  if (book) {
    return <BookReader content={book.content} current={book.entry} manifest={book.manifest} />
  }

  return <ContentPage endPoint={path} section={section} />
}

export default BooksPage
