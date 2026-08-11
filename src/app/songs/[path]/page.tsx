import { ContentPage } from '@/app/components/ContentPage'

import { siteSections, MusicSections } from '@/app/config'

export function generateStaticParams() {

  const paths = Object.keys(siteSections.music.siteSections[MusicSections.songs].content).map(item => {
    //console.log('book', book)
    const path = siteSections.music.siteSections[MusicSections.songs].content[item].endPoint
    return { path: path }
  })
  //console.log('paths', paths)
  return paths
}

const SongsPage = async ({
  params,
}: {
  params: Promise<{ path: string }>
}) => {
  const { path } = await params

  return <ContentPage endPoint={path} section={siteSections.music.siteSections[MusicSections.songs]} />
}

export default SongsPage
