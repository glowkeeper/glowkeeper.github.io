import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { humourSections } from '@/app/config'

const HumourPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.jpg"
    subsection={humourSections}
  />
)

export default HumourPage
