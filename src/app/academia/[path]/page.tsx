import { ContentPage } from '@/app/components/ContentPage'

import { siteSections, AcademiaSections } from '@/app/config'
import { createContentMetadataGenerator } from '@/app/utils/metadata'

const section = siteSections.academia.siteSections[AcademiaSections.academia]

export const generateMetadata = createContentMetadataGenerator(section)

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

  return <ContentPage endPoint={path} section={section} />
}

export default AcademiaPage
