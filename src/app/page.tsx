import { ResponsiveLanding } from '@/app/components/ResponsiveLanding'

const HomePage = () => {
  return (
    <ResponsiveLanding
      imageAlt="dr huckle"
      imageClassName="home"
      imageSrc="/assets/images/me.avif"
    >
      <div className="home-hero">
        <p className="eyebrow">Educator · Developer · Writer</p>
        <h1>Where code, creativity and curiosity meet.</h1>
        <p className="landing-deck">I design learning experiences, build software and follow ideas wherever they lead. This is where I share my teaching, research and independent projects alongside poetry, prose and music.</p>
      </div>
    </ResponsiveLanding>
  )
}

export default HomePage
