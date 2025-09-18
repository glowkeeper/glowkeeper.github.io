import { Page } from '@/app/components/Page'

import { siteSections, AcademiaSections } from '@/app/config'

export function generateStaticParams() {

  const paths = Object.keys(siteSections.academia.siteSections[AcademiaSections.academia].content).map(item => {
    const path = siteSections.academia.siteSections[AcademiaSections.academia].content[item].endPoint
    return { path: path }
  })
  //console.log('paths', paths)
  return paths
}

const AcademiaPage = async ({
  params,
}: {
  params: Promise<{ path: string }>
}) => {

  const { path } = await params

  const route = `${siteSections.academia.siteSections[AcademiaSections.academia].path}/${path}`
  return <Page title={siteSections.academia.siteSections[AcademiaSections.academia].title} path={route} />
}

export default AcademiaPage
