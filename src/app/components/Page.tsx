import type { ReactNode } from 'react'
 
import Markdown from 'react-markdown'
import type { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

type PageType = ({ content }: PageProps) => ReactNode

interface PageProps {
  content: string
}

const markdownComponents: Components = {
  table: ({ children, ...props }) => (
    <div className="table-scroll" role="region" aria-label="Scrollable table" tabIndex={0}>
      <table {...props}>{children}</table>
    </div>
  ),
}

export const Page: PageType = ({ content }) => (
  <article className="article">
    <Markdown components={markdownComponents} remarkPlugins={[remarkGfm]}>{content}</Markdown>
  </article>
)
