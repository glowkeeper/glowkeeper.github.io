import Link from 'next/link'
import Image from 'next/image'

import { appsSections } from '@/app/config'

// const SoftwareAppsPage = ({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) => {
  //const { slug } = await params

const SoftwareAppsPage = () => {
    
  return (
    <>

      <div className="max-sm:hidden grid grid-cols-2 gap-16">
        <div className="home-container">
          <Image
            className='coding'
            fill
            src="/assets/images/coding.jpg"
            alt="dr huckle, coding"
            priority={true}
          />
        </div>
        <div className='grid h-[var(--main-height)] place-items-center'> 
          <div>     
            <h1>built software</h1>
            <p>{appsSections.title}</p>     
            <div
              className="grid grid-cols-4 grid-flow-row auto-rows-fr gap-2"
            >      
              {Object.keys(appsSections.content).map(item => 
                      
                <div
                  key={item}
                >
                  <Link
                    key={item}
                    href={`${appsSections.path}/${appsSections.content[item].endPoint}`}
                  >                                        
                    {appsSections.content[item].title}
                  </Link>
                </div>
                
              )}  
            </div>
          </div>
        </div>
      </div>   
      <div className="md:hidden grid grid-rows-2 h-[var(--main-height)]">
        <div className='grid items-center'> 
          <div>     
            <h1>built software</h1>
            <p>{appsSections.title}</p>  
            <div
              className="grid grid-cols-4 grid-flow-row auto-rows-fr gap-2"
            >        
              {Object.keys(appsSections.content).map(item => 
                      
                <div
                  key={item}
                >
                  <Link
                    key={item}
                    href={`${appsSections.path}/${appsSections.content[item].endPoint}`}
                  >                                        
                    {appsSections.content[item].title}
                  </Link>
                </div>
                
              )}  
            </div>  
          </div>
        </div>
        <div className="home-container">
          <Image
            className='coding'
            fill
            src="/assets/images/coding.jpg"
            alt="dr huckle, coding"
            priority={true}
          />
        </div>
      </div>     
    </>
  )
}

export default SoftwareAppsPage
