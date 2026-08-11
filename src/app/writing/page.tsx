import { SectionLanding } from '@/app/components/SectionLanding'

const WritingPage = () => (
  <SectionLanding
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.jpg"
    linkGridClassName="grid grid-cols-4 md:grid-cols-5 grid-flow-row auto-rows-fr gap-1"
    section="writing"
    showImageOnMobile={false}
  />
)

export default WritingPage
