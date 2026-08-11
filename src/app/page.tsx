import { ResponsiveLanding } from '@/app/components/ResponsiveLanding'

const HomePage = () => {
  return (
    <ResponsiveLanding
      imageAlt="dr huckle"
      imageClassName="home"
      imageSrc="/assets/images/me.jpg"
    >
      <div className="text-center">
        <h2>Where Code, Creativity and Curiosity Meet</h2>
        <p className="text-justify md:text-center">Dr Steve Huckle is a writer, academic and educator exploring the spaces between technology, teaching and creative practice. At <a href="https://huckle.studio/">huckle.studio</a>, he shares selected research, university work, and independent projects — from blockchain and decentralised systems to poetry, prose and pedagogy. Grounded in both industry and academia, his work reflects a thoughtful, curious approach to making and understanding.</p>
      </div>
    </ResponsiveLanding>
  )
}

export default HomePage
