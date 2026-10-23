import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { projectsSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: projectsSections.title,
  description: 'Projects that stretch the idea of software, built by Dr Steve Huckle.',
  path: projectsSections.path,
})

const SoftwareProjectsPage = () => (
  <SubsectionLanding
    heading="projects"
    imageAlt="dr huckle, coding"
    imageClassName="coding"
    imageSrc="/assets/images/coding.avif"
    subsection={projectsSections}
  />
)

export default SoftwareProjectsPage
