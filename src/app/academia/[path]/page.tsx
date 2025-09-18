import { Page } from '@/app/components/Page'

import { siteSections, AcademiaSections } from '@/app/config'

export function generateStaticParams() {

  const paths = Object.keys(siteSections.about.siteSections[AcademiaSections.academia].content).map(item => {
    const path = siteSections.about.siteSections[AcademiaSections.academia].content[item].endPoint
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

  const route = `${siteSections.about.siteSections[AcademiaSections.academia].path}/${path}`
  return <Page title={siteSections.about.siteSections[AcademiaSections.academia].title} path={route} />
}

export default AcademiaPage
