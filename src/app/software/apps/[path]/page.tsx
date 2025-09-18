import { Page } from '@/app/components/Page'

import { siteSections, SoftwareSections } from '@/app/config'

export function generateStaticParams() {

  const paths = Object.keys(siteSections.writing.siteSections[SoftwareSections.apps].content).map(item => {
    //console.log('book', book)
    const path = siteSections.writing.siteSections[SoftwareSections.apps].content[item].endPoint
    return { path: path }
  })
  //console.log('paths', paths)
  return paths
}

const AppsPage = async ({
  params,
}: {
  params: Promise<{ path: string }>
}) => {
  const { path } = await params

  const route = `${siteSections.writing.siteSections[SoftwareSections.apps].path}/${path}`
  return <Page title={siteSections.writing.siteSections[SoftwareSections.apps].title} path={route} />
}

export default AppsPage
