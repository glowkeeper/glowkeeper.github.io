import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { reportsSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: reportsSections.title,
  description: 'Personal reports from music, travel, football and life beyond the desk.',
  path: reportsSections.path,
})

const ReportsPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.webp"
    subsection={reportsSections}
  />
)

export default ReportsPage
