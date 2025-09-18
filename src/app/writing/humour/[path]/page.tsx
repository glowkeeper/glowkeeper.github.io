import { Page } from '@/app/components/Page'

import { siteSections, WritingSections } from '@/app/config'

export function generateStaticParams() {

  const paths = Object.keys(siteSections.writing.siteSections[WritingSections.humour].content).map(item => {
    //console.log('book', book)
    const path = siteSections.writing.siteSections[WritingSections.humour].content[item].endPoint
    return { path: path }
  })
  //console.log('paths', paths)
  return paths
}

const HumourPage = async ({
  params,
}: {
  params: Promise<{ path: string }>
}) => {
  const { path } = await params
  
  const route = `${siteSections.writing.siteSections[WritingSections.humour].path}/${path}`
  return <Page title={siteSections.writing.siteSections[WritingSections.humour].title} path={route} />
}

export default HumourPage
