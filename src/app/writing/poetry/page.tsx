import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { poetrySections } from '@/app/config'

const PoetryPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.jpg"
    subsection={poetrySections}
  />
)

export default PoetryPage
