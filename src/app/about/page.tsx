import Link from 'next/link'

import { ResponsiveLanding } from '@/app/components/ResponsiveLanding'
import { siteSections } from '@/app/config'
import { createPageMetadata } from '@/app/utils/metadata'

export const metadata = createPageMetadata({
  title: 'About Dr Huckle',
  description: siteSections.about.subText,
  path: '/about',
})

const AboutPage = () => (
  <ResponsiveLanding
    imageAlt="dr huckle, standing"
    imageClassName="home"
    imageCaption="Usually thinking about what to make, teach or write next."
    imageSrc="/assets/images/standingMan.avif"
  >
    <p className="eyebrow">Educator · Developer · Creative</p>
    <h1>About me</h1>
    <div className="landing-deck about-introduction">
      <p>I’m Dr Steve Huckle: a computing educator, curriculum designer and software developer with a longstanding interest in where technology, creativity and social purpose meet.</p>
      <p>My career has moved through systems administration, games and audio programming, web development, blockchain research and higher education. Today, I design learning experiences, teach computing and data skills, build independent software, and write poetry, fiction and songs.</p>
    </div>
    <div className="about-actions">
      <Link className="about-action" href="/about/cv">read my cv</Link>
      <Link className="about-action" href="/about/contact">get in touch</Link>
    </div>
  </ResponsiveLanding>
)

export default AboutPage
