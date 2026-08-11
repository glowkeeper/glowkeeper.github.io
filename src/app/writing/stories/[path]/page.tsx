import { ContentPage } from '@/app/components/ContentPage'

import { siteSections, WritingSections } from '@/app/config'
import { createContentMetadataGenerator } from '@/app/utils/metadata'

const section = siteSections.writing.siteSections[WritingSections.stories]

export const generateMetadata = createContentMetadataGenerator(section)

export function generateStaticParams() {

  const paths = Object.keys(siteSections.writing.siteSections[WritingSections.stories].content).map(item => {
    //console.log('book', book)
    const path = siteSections.writing.siteSections[WritingSections.stories].content[item].endPoint
    return { path: path }
  })
  //console.log('paths', paths)
  return paths
}

const StoriesPage = async ({
  params,
}: {
  params: Promise<{ path: string }>
}) => {
  const { path } = await params
  
  return <ContentPage endPoint={path} section={section} />
}

export default StoriesPage
