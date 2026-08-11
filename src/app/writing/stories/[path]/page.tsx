import { ContentPage } from '@/app/components/ContentPage'

import { siteSections, WritingSections } from '@/app/config'

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
  
  return <ContentPage endPoint={path} section={siteSections.writing.siteSections[WritingSections.stories]} />
}

export default StoriesPage
