import { ContentPage } from '@/app/components/ContentPage'

import { appsSections, playgroundSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

const sections = [appsSections, playgroundSections]

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ path: string }>
}) => {
  const { path } = await params
  const section = sections.find(candidate =>
    Object.values(candidate.content).some(item => item.endPoint === path)
  )
  const item = section && Object.values(section.content).find(content => content.endPoint === path)

  return item && section ? createPageMetadata({
    title: item.title,
    description: item.subText,
    path: `${section.path}/${item.endPoint}`,
  }) : {}
}

export function generateStaticParams() {

  return sections.flatMap(section =>
    Object.values(section.content).map(item => ({ path: item.endPoint }))
  )
}

const AppsPage = async ({
  params,
}: {
  params: Promise<{ path: string }>
}) => {
  const { path } = await params
  const section = sections.find(candidate =>
    Object.values(candidate.content).some(item => item.endPoint === path)
  ) ?? appsSections

  return <ContentPage endPoint={path} section={section} />
}

export default AppsPage
