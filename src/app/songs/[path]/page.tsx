import { Page } from '@/app/components/Page'

import { siteSections, MusicSections } from '@/app/config'

export function generateStaticParams() {

  const paths = Object.keys(siteSections.writing.siteSections[MusicSections.songs].content).map(item => {
    //console.log('book', book)
    const path = siteSections.writing.siteSections[MusicSections.songs].content[item].endPoint
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

  const route = `${siteSections.writing.siteSections[MusicSections.songs].path}/${path}`
  return <Page title={siteSections.writing.siteSections[MusicSections.songs].title} path={route} />
}

export default SongsPage
