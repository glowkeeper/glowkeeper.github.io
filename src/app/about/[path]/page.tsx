import { ContentPage } from '@/app/components/ContentPage'

import { siteSections, AboutSections } from '@/app/config'

export function generateStaticParams() {

  const paths = Object.keys(siteSections.about.siteSections[AboutSections.about].content).map(item => {
    const path = siteSections.about.siteSections[AboutSections.about].content[item].endPoint
    return { path: path }
  })
  //console.log('paths', paths)
  return paths
}

const AboutPage = async ({
  params,
}: {
  params: Promise<{ path: string }>
}) => {
  const { path } = await params

  return <ContentPage endPoint={path} section={siteSections.about.siteSections[AboutSections.about]} />
}

export default AboutPage
