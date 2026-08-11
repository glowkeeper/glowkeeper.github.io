'use client'

import React, { useEffect, useRef, useState } from 'react'
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

const createMenu = (): MenuType => {
  const menu: MenuType = {}

  Object.keys(siteSections as TopLevel).forEach(section => {
    const sectionTitle = siteSections[section].title
    menu[sectionTitle] = {}

    siteSections[section].siteSections.forEach(subSection => {
      menu[sectionTitle][subSection.title] = Object.values(subSection.content).map(item => ({
        title: item.title,
        route: `${subSection.path}/${item.endPoint}`,
      }))
    })
  })

  return menu
}

const menu = createMenu()

export const Menu = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [subMenu, setSubMenu] = useState<SubMenuLinks | null>(null)
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (transitionTimer.current) {
        clearTimeout(transitionTimer.current)
      }
    }
  }, [])

  const scheduleTransition = (callback: () => void) => {
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current)
    }

    transitionTimer.current = setTimeout(() => {
      transitionTimer.current = null
      callback()
    }, 300)
  }

  const onHasClosed = () => {
    scheduleTransition(() => {
      setSubMenu(null)
      setIsOpen(true)
    })
  }

  const onHasLinked = () => {
    scheduleTransition(() => {
      setSubMenu(null)
      setIsOpen(false)
    })
  }

  return (
      <>        

        <div className="menu-trigger grid justify-end">
          <button
            aria-label="Open menu"
            onClick={() => {
              setIsOpen(true)
            }}
          >
            <span aria-hidden="true">☰</span>
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
              aria-label="Close menu"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              ×
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
                    className="menu-item-home on-primary"
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

        {subMenu && <SubMenu title={subMenu.title} links={subMenu.links} onHasClosed={onHasClosed} onHasLinked={onHasLinked}/>}
      </>
  )
}

{/* <SubMenu title={thisSection} links={menu[section][thisSection]} onClose={onClose} />    */}
