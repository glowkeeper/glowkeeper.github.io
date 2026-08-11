import { SectionLanding } from '@/app/components/SectionLanding'
import { siteSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: siteSections.academia.title,
  description: siteSections.academia.subText,
  path: '/academia',
})

const AcademiaPage = () => (
  <SectionLanding
    imageAlt="dr huckle, presenting"
    imageClassName="academia"
    imageSrc="/assets/images/dCBrighton190318.avif"
    linkGridClassName="grid grid-flow-col auto-cols-auto justify-start gap-2"
    section="academia"
  />
)

export default AcademiaPage
