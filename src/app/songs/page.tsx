import { SectionLanding } from '@/app/components/SectionLanding'

const SongsPage = () => (
  <SectionLanding
    imageAlt="dr huckle, (not) playing guitar"
    imageClassName="songs"
    imageSrc="/assets/images/theGuitarist.jpg"
    linkGridClassName="grid grid-cols-4 grid-flow-row auto-rows-fr gap-2"
    section="music"
  />
)

export default SongsPage
