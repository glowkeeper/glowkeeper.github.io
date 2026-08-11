import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { poetrySections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: poetrySections.title,
  description: 'Poetry about family, politics, place and the peculiarities of ordinary life.',
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
