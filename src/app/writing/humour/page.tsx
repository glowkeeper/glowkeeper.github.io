import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { humourSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: humourSections.title,
  description: 'Comic writing, jokes and playful observations by Dr Steve Huckle.',
  path: humourSections.path,
})

const HumourPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.webp"
    subsection={humourSections}
  />
)

export default HumourPage
