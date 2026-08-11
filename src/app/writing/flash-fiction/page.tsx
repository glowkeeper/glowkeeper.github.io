import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { flashFictionSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: flashFictionSections.title,
  description: 'Flash fiction by Dr Steve Huckle.',
  path: flashFictionSections.path,
})

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
