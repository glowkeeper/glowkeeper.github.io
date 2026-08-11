import { SectionLanding } from '@/app/components/SectionLanding'
import { siteSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: 'About Dr Huckle',
  description: siteSections.about.subText,
  path: '/about',
})

const AboutPage = () => (
  <SectionLanding
    imageAlt="dr huckle, standing"
    imageClassName="home"
    imageSrc="/assets/images/standingMan.jpeg"
    linkGridClassName="grid grid-flow-col auto-cols-auto justify-start gap-2"
    section="about"
  />
)

export default AboutPage
