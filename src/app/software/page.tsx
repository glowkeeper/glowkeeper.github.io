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
  const currentTitle = store?.state.title
  const dispatch = store?.dispatch

  const section = 'software'

  useEffect(() => {
  
    if(currentTitle !== section)
    {
      dispatch?.({
        type: StoreAction.TitleSet,
        payload: section,
      }) 
    }

  }, [currentTitle, dispatch])

  return (

    <>    
      <div className="hidden md:grid h-[var(--main-height)] grid-cols-2 gap-16">
        <div className="home-container">
          <Image
            className='coding'
            fill
            src="/assets/images/coding.jpg"
            alt="dr huckle, coding"
            priority={true}
          />
        </div>
        <div className='grid place-items-center'> 
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
                    className="grid grid-cols-4 grid-flow-row auto-rows-fr gap-2"
                  >
                    {Object.keys(subSection.content).map(item => 
                    
                      <div
                        key={item}
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
      <div className="md:hidden grid grid-rows-[auto_minmax(12rem,1fr)] gap-4 min-h-[var(--main-height)]">
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
                    className="grid grid-cols-4 grid-flow-row auto-rows-fr gap-2"
                  >
                    {Object.keys(subSection.content).map(item => 
                    
                      <div
                        key={item}
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

export default AboutPage
