import Image from 'next/image'

const HomePage = () => {

  return (

    <>    
      <div className="max-sm:hidden grid grid-cols-2 gap-16">
        <div className="home-container">
          <Image
            className='home'
            fill
            src="/assets/images/me.jpg"
            alt="dr huckle"
            priority={true}
          />
        </div>
        <div className='grid h-[var(--main-height)] place-items-center'> 
          <div className='text-center'>     
            <h2>Where Code, Creativity and Curiosity Meet</h2>
            <p>Dr Steve Huckle is a writer, academic and educator exploring the spaces between technology, teaching and creative practice. At <a href="https://huckle.studio/">huckle.studio</a>, he shares selected research, university work, and independent projects — from blockchain and decentralised systems to poetry, prose and pedagogy. Grounded in both industry and academia, his work reflects a thoughtful, curious approach to making and understanding.</p>
          </div>  
        </div>
      </div>   
      <div className="md:hidden grid grid-rows-2 h-[var(--main-height)]">
        <div className='grid items-center'> 
          <div>     
            <h2 className='text-center'>Where Code, Creativity and Curiosity Meet</h2>
            <p className='text-justify'>Dr Steve Huckle is a writer, academic and educator exploring the spaces between technology, teaching and creative practice. At <a href="https://huckle.studio/">huckle.studio</a>, he shares selected research, university work, and independent projects — from blockchain and decentralised systems to poetry, prose and pedagogy. Grounded in both industry and academia, his work reflects a thoughtful, curious approach to making and understanding.</p>
          </div>  
        </div>
        <div className="home-container">
          <Image
            className='home'
            fill
            src="/assets/images/me.jpg"
            alt="dr huckle"
            priority={true}
          />
        </div>
      </div>   
    </>
  )
}

export default HomePage
