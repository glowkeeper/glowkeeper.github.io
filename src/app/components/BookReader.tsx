import Link from 'next/link'

import { Page } from '@/app/components/Page'
import type { BookEntry, BookManifest } from '@/app/utils/bookRegistry'

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

  return (
    <div className="book-reader">
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
      <nav aria-label="Book page navigation" className="book-pagination">
        {previous ? <Link href={entryHref(manifest, previous)}>← {previous.title}</Link> : <span />}
        {next ? <Link href={entryHref(manifest, next)}>{next.title} →</Link> : <span />}
      </nav>
    </div>
  )
}
