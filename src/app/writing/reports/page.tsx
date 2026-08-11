import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { reportsSections } from '@/app/config'

const ReportsPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.jpg"
    subsection={reportsSections}
  />
)

export default ReportsPage
