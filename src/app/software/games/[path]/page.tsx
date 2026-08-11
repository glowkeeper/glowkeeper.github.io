import { ContentPage } from '@/app/components/ContentPage'

import { siteSections, SoftwareSections } from '@/app/config'
import { createContentMetadataGenerator } from '@/app/utils/metadata'

const section = siteSections.software.siteSections[SoftwareSections.games]

export const generateMetadata = createContentMetadataGenerator(section)

export function generateStaticParams() {

  const paths = Object.keys(siteSections.software.siteSections[SoftwareSections.games].content).map(item => {
    //console.log('book', book)
    const path = siteSections.software.siteSections[SoftwareSections.games].content[item].endPoint
    return { path: path }
  })
  //console.log('paths', paths)
  return paths
}

const GamesPage = async ({
  params,
}: {
  params: Promise<{ path: string }>
}) => {
  const { path } = await params

  return <ContentPage endPoint={path} section={section} />
}

export default GamesPage
