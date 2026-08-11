import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { flashFictionSections } from '@/app/config'

const FlashFictionPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.jpg"
    subsection={flashFictionSections}
  />
)

export default FlashFictionPage
