import type { ReactNode } from 'react'
 
import Markdown from 'react-markdown'
import type { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

type PageType = ({ content }: PageProps) => ReactNode

interface PageProps {
  content: string
  variant?: 'default' | 'poetry'
}

const markdownComponents = (variant: PageProps['variant']): Components => ({
  table: ({ children, node, ...props }) => {
    void node

    return variant === 'poetry' ? (
      <div className="verse">
        <table className="verse-lines" {...props}>{children}</table>
      </div>
    ) : (
      <div className="table-scroll" role="region" aria-label="Scrollable table" tabIndex={0}>
        <table {...props}>{children}</table>
      </div>
    )
  },
})

export const Page: PageType = ({ content, variant = 'default' }) => (
  <article className={variant === 'poetry' ? 'article article--poetry' : 'article'}>
    <Markdown components={markdownComponents(variant)} remarkPlugins={[remarkGfm]}>{content}</Markdown>
  </article>
)
