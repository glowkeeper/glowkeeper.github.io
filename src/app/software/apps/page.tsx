import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { appsSections } from '@/app/config'

const SoftwareAppsPage = () => (
  <SubsectionLanding
    heading="built software"
    imageAlt="dr huckle, coding"
    imageClassName="coding"
    imageSrc="/assets/images/coding.jpg"
    subsection={appsSections}
  />
)

export default SoftwareAppsPage
