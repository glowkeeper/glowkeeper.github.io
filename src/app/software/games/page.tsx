import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { gamesSections } from '@/app/config'

const SoftwareGamesPage = () => (
  <SubsectionLanding
    heading="built software"
    imageAlt="dr huckle, coding"
    imageClassName="coding"
    imageSrc="/assets/images/coding.jpg"
    subsection={gamesSections}
  />
)

export default SoftwareGamesPage
