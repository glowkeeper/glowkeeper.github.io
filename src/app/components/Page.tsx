import type { ReactNode } from 'react'
 
import Markdown from 'react-markdown'
import type { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

type PageType = ({ content }: PageProps) => ReactNode

interface PageProps {
  content: string
  variant?: 'default' | 'poetry'
}

type MarkdownNode = {
  children?: readonly unknown[]
  tagName?: string
}

const isMarkdownNode = (value: unknown): value is MarkdownNode => (
  typeof value === 'object' && value !== null
)

const tableColumnCount = (node?: MarkdownNode): number => {
  if (!node) return 0

  if (node.tagName === 'tr') {
    return node.children?.filter(child => (
      isMarkdownNode(child) && (child.tagName === 'th' || child.tagName === 'td')
    )).length ?? 0
  }

  return Math.max(0, ...(node.children?.map(child => (
    isMarkdownNode(child) ? tableColumnCount(child) : 0
  )) ?? []))
}

const markdownComponents = (variant: PageProps['variant']): Components => ({
  table: ({ children, node, ...props }) => {
    const isComparison = variant === 'poetry' && tableColumnCount(node) > 1

    return variant === 'poetry' ? (
      <div
        aria-label={isComparison ? 'Side-by-side poem comparison' : undefined}
        className={isComparison ? 'verse verse--comparison' : 'verse'}
        role={isComparison ? 'region' : undefined}
        tabIndex={isComparison ? 0 : undefined}
      >
        <table className={isComparison ? 'verse-lines verse-lines--comparison' : 'verse-lines'} {...props}>{children}</table>
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
