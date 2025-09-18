'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { SubMenu } from './SubMenu'

import { siteSections } from '@/app/config'

import type { Site as TopLevel } from '@/app/store/types'

type SubMenuLinks = {
  title: string
  links: MenuLink[]
}

export type MenuLink = {
  title: string
  route: string
}

type MenuSections = {
  [key: string]: MenuLink[]
}

type MenuType = {
  [key: string]: MenuSections
}

export const Menu = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [menu, setMenu] = useState<MenuType>({})
  const [subMenu, setSubMenu] = useState<SubMenuLinks>({} as SubMenuLinks)

  useEffect(() => {

    //console.log('in here')

    const menu: MenuType = {}
    Object.keys(siteSections as TopLevel).forEach((section) => {
      //console.log('section', section)

      const sectionTitle = siteSections[section].title

      menu[sectionTitle] = {}
       
      siteSections[section].siteSections.forEach((subSection) => {
        //console.log('sub section', subSection)

        menu[sectionTitle][subSection.title] = []
        
        Object.keys(subSection.content).forEach(item => {

          const thisLink: MenuLink = {
            title: subSection.content[item].title,
            route: subSection.content[item].route
          }

          menu[sectionTitle][subSection.title].push(thisLink)
          
        })
      })

    })

    setMenu(menu)

  }, [])

  const onHasClosed = () => {

    const timer = setTimeout(() => {
      setSubMenu({} as SubMenuLinks)
      setIsOpen(true)
    }, 300)

    return () => clearInterval(timer)      
  }

  const onHasLinked = () => {
    
    const timer = setTimeout(() => {
      setSubMenu({} as SubMenuLinks)
      setIsOpen(false)
    }, 300)

    return () => clearInterval(timer)      
  }

  return (
      <>        

        <div 
          id='menu-burger'
          className="grid justify-end"
        >
          <button
            onClick={() => {
              setIsOpen(true)
            }}
          >
            <p id="menu-burger">≡</p>
          </button>
        </div>

        {/* the menu - slides in and out via css */}
        <nav
          id='menu-nav'
          className={isOpen ? "open" : "close"}
        >
          <div 
            className="grid justify-end"
          >
            <button
              onClick={() => {
                setIsOpen(false)
              }}
            >
              X
            </button>
            <br />
          </div>

          <div
            className='grid grid-flow-row justify-start'
          >
            <div
                  className='grid grid-flow-col cols-1 justify-start'
                >
                  <Link
                    className="menu-link menu-item-home on-primary"
                    href="/"
                    onClick={() => {
                      setIsOpen(false)
                      onHasLinked()
                    }}
                  >                                        
                    {'home'}
                  </Link>
                </div>
            
            {Object.keys(menu).map((section, index) => {              

              return (     
                
                <div
                  key={index}
                >
                
                  <p className="menu-sections">{section}</p> 
                    
                  {Object.keys(menu[section]).map(thisSection => {

                    return (
                      <p
                        key={`${section} + ${thisSection} + ${index}`}
                        className="menu-item on-primary"
                        onClick={() => {
                          const subMenu: SubMenuLinks = {
                            title: thisSection,
                            links: menu[section][thisSection]
                          }
                          setSubMenu(subMenu)     
                          setIsOpen(false)                    
                        }}
                      >
                        {thisSection}
                      </p>
                    )
                  })}
                </div>

              )})}
          </div>
        </nav>

        {subMenu?.hasOwnProperty('title') && <SubMenu title={subMenu.title} links={subMenu.links} onHasClosed={onHasClosed} onHasLinked={onHasLinked}/>}
      </>
  )
}

{/* <SubMenu title={thisSection} links={menu[section][thisSection]} onClose={onClose} />    */}