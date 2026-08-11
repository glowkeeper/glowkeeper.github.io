import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { poetrySections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: poetrySections.title,
  description: 'Poetry by Dr Steve Huckle.',
  path: poetrySections.path,
})

const PoetryPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.avif"
    subsection={poetrySections}
  />
)

export default PoetryPage
