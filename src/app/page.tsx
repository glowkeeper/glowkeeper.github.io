import { ResponsiveLanding } from '@/app/components/ResponsiveLanding'

const HomePage = () => {
  return (
    <ResponsiveLanding
      imageAlt="dr huckle"
      imageClassName="home"
      imageSrc="/assets/images/me.jpg"
    >
      <div className="home-hero">
        <p className="eyebrow">Writer · Academic · Educator</p>
        <h1>Where code, creativity and curiosity meet.</h1>
        <p className="landing-deck">Dr Steve Huckle explores the spaces between technology, teaching and creative practice. At <a href="https://huckle.studio/">huckle.studio</a>, he shares selected research, university work, and independent projects—from blockchain and decentralised systems to poetry, prose and pedagogy.</p>
      </div>
    </ResponsiveLanding>
  )
}

export default HomePage
