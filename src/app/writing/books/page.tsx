import { SubsectionLanding } from '@/app/components/SubsectionLanding'
import { booksSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: booksSections.title,
  description: 'Books and longer-form writing by Dr Steve Huckle.',
  path: booksSections.path,
})

const BooksPage = () => (
  <SubsectionLanding
    heading="writing"
    imageAlt="dr huckle, writing"
    imageClassName="writing"
    imageSrc="/assets/images/writing.webp"
    subsection={booksSections}
  />
)

export default BooksPage
