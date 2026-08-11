import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { booksSections } from '@/app/config'

const BooksPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.jpg"
    subsection={booksSections}
  />
)

export default BooksPage
