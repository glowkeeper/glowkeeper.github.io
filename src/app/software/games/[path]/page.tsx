import { ContentPage } from '@/app/components/ContentPage'

import { siteSections, SoftwareSections } from '@/app/config'

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

  return <ContentPage endPoint={path} section={siteSections.software.siteSections[SoftwareSections.games]} />
}

export default GamesPage
