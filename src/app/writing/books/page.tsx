import Link from 'next/link'
import Image from 'next/image'

import { booksSections } from '@/app/config'

// const SoftwareAppsPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params
const WritingPage = () => {
    
  return (
    <>

      <div className="hidden md:grid grid-cols-2 gap-16">
        <div className="home-container">
          <Image
            className='writing'
            fill
            src="/assets/images/writing.jpg"
            alt="dr huckle, writing"
            priority={true}
          />
        </div>
        <div className='grid h-[var(--main-height)] place-items-center'> 
          <div>     
            <h1>writing</h1>
            <p>{booksSections.title}</p>     
            <div
              className="grid grid-cols-4 grid-flow-row auto-rows-fr gap-2"
            >      
              {Object.keys(booksSections.content).map(item => 
                      
                <div
                  key={item}
                >
                  <Link
                    key={item}
                    href={`${booksSections.path}/${booksSections.content[item].endPoint}`}
                  >                                        
                    {booksSections.content[item].title}
                  </Link>
                </div>
                
              )}  
            </div>
          </div>
        </div>
      </div>   
      <div className="md:hidden grid grid-rows-[auto_minmax(12rem,1fr)] gap-4 min-h-[var(--main-height)]">
        <div className='grid items-center'> 
          <div>     
            <h1>writing</h1>
            <p>{booksSections.title}</p>  
            <div
              className="grid grid-cols-4 grid-flow-row auto-rows-fr gap-2"
            >        
              {Object.keys(booksSections.content).map(item => 
                      
                <div
                  key={item}
                >
                  <Link
                    key={item}
                    href={`${booksSections.path}/${booksSections.content[item].endPoint}`}
                  >                                        
                    {booksSections.content[item].title}
                  </Link>
                </div>
                
              )}  
            </div>  
          </div>
        </div>
        <div className="home-container">
          <Image
            className='writing'
            fill
            src="/assets/images/writing.jpg"
            alt="dr huckle, writing"
            priority={true}
          />
        </div>
      </div>     
    </>
  )
}

export default WritingPage
