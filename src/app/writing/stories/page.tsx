import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { storiesSections } from '@/app/config'

const StoriesPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.jpg"
    subsection={storiesSections}
  />
)

export default StoriesPage
