import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { gamesSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: gamesSections.title,
  description: 'Small, playful browser games built by Dr Steve Huckle.',
  path: gamesSections.path,
})

const SoftwareGamesPage = () => (
  <SubsectionLanding
    heading="built software"
    imageAlt="dr huckle, coding"
    imageClassName="coding"
    imageSrc="/assets/images/coding.avif"
    subsection={gamesSections}
  />
)

export default SoftwareGamesPage
