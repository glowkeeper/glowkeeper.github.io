import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { appsSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: appsSections.title,
  description: 'Software applications and browser experiments built by Dr Steve Huckle.',
  path: appsSections.path,
})

const SoftwareAppsPage = () => (
  <SubsectionLanding
    heading="built software"
    imageAlt="dr huckle, coding"
    imageClassName="coding"
    imageSrc="/assets/images/coding.avif"
    subsection={appsSections}
  />
)

export default SoftwareAppsPage
