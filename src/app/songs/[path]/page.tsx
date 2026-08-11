import { ContentPage } from '@/app/components/ContentPage'

import { siteSections, MusicSections } from '@/app/config'
import { createContentMetadataGenerator } from '@/app/utils/metadata'

const section = siteSections.music.siteSections[MusicSections.songs]

export const generateMetadata = createContentMetadataGenerator(section)

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

  return <ContentPage endPoint={path} section={section} />
}

export default SongsPage
