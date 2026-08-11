import { SectionLanding } from '@/app/components/SectionLanding'
import { siteSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: siteSections.software.title,
  description: siteSections.software.subText,
  path: '/software',
})

const SoftwarePage = () => (
  <SectionLanding
    imageAlt="dr huckle, coding"
    imageClassName="coding"
    imageSrc="/assets/images/coding.jpg"
    linkGridClassName="grid grid-cols-4 grid-flow-row auto-rows-fr gap-2"
    section="software"
  />
)

export default SoftwarePage
