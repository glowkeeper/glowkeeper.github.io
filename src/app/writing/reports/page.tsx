import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { reportsSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: reportsSections.title,
  description: 'Reports, travel writing and reflections by Dr Steve Huckle.',
  path: reportsSections.path,
})

const ReportsPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.avif"
    subsection={reportsSections}
  />
)

export default ReportsPage
