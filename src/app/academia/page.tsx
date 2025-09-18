'use client'

import React, { useContext, useEffect } from "react"

import Link from 'next/link'
import Image from 'next/image'

import {
  StoreContext,
  StoreAction
} from '@/app/store/store'

import { siteSections } from '@/app/config'

const AboutPage = () => {

  const store = useContext(StoreContext)

  const section = 'academia'

  useEffect(() => {
    
    if(store?.state.title != section) 
    {
      store?.dispatch({
        type: StoreAction.TitleSet,
        payload: section,
      }) 
    }

  }, [store])

  return (

    <>    
      <div className="max-sm:hidden grid grid-cols-2 gap-16">
        <div className="home-container">
          <Image
            className='academia'
            fill
            src="/assets/images/dCBrighton190318.png"
            alt="dr huckle, presenting"
            priority={true}
          />
        </div>
        <div className='grid h-[var(--main-height)] place-items-center'> 
          <div>     
            <h1>{siteSections[section].title}</h1>
            <p>{siteSections[section].subText}</p>

            {siteSections[section].siteSections.map((subSection, index) => {

              const path = subSection.path

              return (

                <div
                  key={index}
                >
                  { siteSections[section].siteSections.length > 1 && <h2>{siteSections[section].siteSections[index].title}</h2>}

                  <div
                    className='grid grid-flow-col auto-cols-auto justify-start gap-2'
                  >
                    {Object.keys(subSection.content).map(item => 
                    
                      <div
                        key={item}
                        className='grid grid-flow-col auto-cols-auto justify-start gap-2'
                      >
                        <Link
                          key={item}
                          href={`${path}/${subSection.content[item].endPoint}`}
                        >                                        
                          {subSection.content[item].title}
                        </Link>
                      </div>
                      
                    )}
                  </div>
                </div>
              )

            })}
          </div>
        </div>
      </div>   
      <div className="md:hidden grid grid-rows-2 h-[var(--main-height)]">
        <div className='grid items-center'> 
          <div>     
            <h1>{siteSections[section].title}</h1>
            <p>{siteSections[section].subText}</p>            

            {siteSections[section].siteSections.map((subSection, index) => {

              const path = subSection.path

              return (

                <div
                  key={index}
                >
                  { siteSections[section].siteSections.length > 1 && <h2>{siteSections[section].siteSections[index].title}</h2>}

                  <div
                    className='grid grid-flow-col auto-cols-auto justify-start gap-2'
                  >
                    {Object.keys(subSection.content).map(item => 
                    
                      <div
                        key={item}
                        className='grid grid-flow-col auto-cols-auto justify-start gap-2'
                      >
                        <Link
                          key={item}
                          href={`${path}/${subSection.content[item].endPoint}`}
                        >                                        
                          {subSection.content[item].title}
                        </Link>
                      </div>
                      
                    )}
                  </div>
                </div>
              )

            })}
          </div>
        </div>
        <div className="home-container">
          <Image
            className='academia'
            fill
            src="/assets/images/dCBrighton190318.png"
            alt="dr huckle, presenting"
            priority={true}
          />
        </div>
      </div>   
    </>
  )
}

export default AboutPage
