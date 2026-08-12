import Link from 'next/link'

import { EmailCopy } from '@/app/components/EmailCopy'
import { Page } from '@/app/components/Page'
import type { BookEntry, BookManifest } from '@/app/utils/bookRegistry'
import { bookEntryDescription, onSlenderStringsDescription } from '@/app/utils/bookSeo'

type BookReaderProps = {
  content: string
  current: BookEntry
  manifest: BookManifest
}

const entryHref = (manifest: BookManifest, entry: BookEntry) => (
  `/writing/books/${manifest.slug}${entry.route ? `/${entry.route}` : ''}`
)

export const BookReader = ({ content, current, manifest }: BookReaderProps) => {
  const currentIndex = manifest.entries.findIndex(entry => entry.route === current.route)
  const previous = manifest.entries[currentIndex - 1]
  const next = manifest.entries[currentIndex + 1]
  const bookUrl = `https://huckle.studio/writing/books/${manifest.slug}`
  const pageUrl = `${bookUrl}${current.route ? `/${current.route}` : ''}`
  const isOnSlenderStrings = manifest.slug === 'on-slender-strings'
  const structuredData = isOnSlenderStrings ? [
    {
      '@context': 'https://schema.org',
      '@type': current.route ? 'Article' : 'Book',
      name: current.route ? current.title : manifest.title,
      headline: current.title,
      description: current.route
        ? bookEntryDescription(manifest, current)
        : onSlenderStringsDescription,
      url: pageUrl,
      author: {
        '@type': 'Person',
        name: 'Dr Steve Huckle',
        url: 'https://huckle.studio/about',
      },
      ...(current.route ? {
        isPartOf: {
          '@type': 'Book',
          name: manifest.title,
          url: bookUrl,
        },
      } : {
        bookFormat: 'https://schema.org/EBook',
        genre: ['Memoir', 'Family', 'Health'],
        inLanguage: 'en-GB',
        about: [
          'Childhood brain tumours',
          'Pilocytic astrocytoma',
          'Paediatric low-grade glioma',
          'Family caregiving',
        ],
      }),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Writing', item: 'https://huckle.studio/writing' },
        { '@type': 'ListItem', position: 2, name: 'Books', item: 'https://huckle.studio/writing/books' },
        { '@type': 'ListItem', position: 3, name: manifest.title, item: bookUrl },
        ...(current.route ? [{ '@type': 'ListItem', position: 4, name: current.title, item: pageUrl }] : []),
      ],
    },
  ] : []

  return (
    <div className="book-reader">
      {structuredData.map((data, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll('<', '\\u003c') }}
          key={`structured-data-${index}`}
          type="application/ld+json"
        />
      ))}
      <details className="book-contents">
        <summary>Contents · {manifest.entries.length} pages</summary>
        <nav aria-label={`${manifest.title} contents`}>
          <ol>
            {manifest.entries.map(entry => (
              <li className={`book-contents__depth-${entry.depth}`} key={entry.route || 'cover'}>
                <Link
                  aria-current={entry.route === current.route ? 'page' : undefined}
                  href={entryHref(manifest, entry)}
                >
                  {entry.title}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </details>
      <Page content={content} />
      {isOnSlenderStrings && !current.route && <EmailCopy label="Contact:" />}
      <nav aria-label="Book page navigation" className="book-pagination">
        {previous ? <Link href={entryHref(manifest, previous)}>← {previous.title}</Link> : <span />}
        {next ? <Link href={entryHref(manifest, next)}>{next.title} →</Link> : <span />}
      </nav>
    </div>
  )
}
