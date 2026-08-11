import { notFound } from 'next/navigation'

import { Page } from '@/app/components/Page'
import type { SiteSection } from '@/app/types'
import { readMarkdown } from '@/app/utils/markdown'

type ContentPageProps = {
  endPoint: string
  section: SiteSection
}

export const ContentPage = async ({ endPoint, section }: ContentPageProps) => {
  const item = Object.values(section.content).find(content => content.endPoint === endPoint)

  if (!item) {
    notFound()
  }

  const content = await readMarkdown(item.content)

  return <Page content={content} />
}
