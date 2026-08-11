import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { storiesSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: storiesSections.title,
  description: 'Original stories written for campfires, candlelight and quiet reading.',
  path: storiesSections.path,
})

const StoriesPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.webp"
    subsection={storiesSections}
  />
)

export default StoriesPage
