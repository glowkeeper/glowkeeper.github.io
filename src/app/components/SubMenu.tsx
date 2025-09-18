'use client'

import React, { useState, useEffect, type ReactNode } from 'react'
import Link from 'next/link'
import type { MenuLink } from './Menu'

type SubMenuType = ({ title, links, onHasClosed, onHasLinked }: SubMenuProps) => ReactNode

interface SubMenuProps {
  title: string
  links: MenuLink[]
  onHasClosed: () => void
  onHasLinked: () => void
}

export const SubMenu: SubMenuType = ({ title, links, onHasClosed, onHasLinked }: SubMenuProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [menu, setMenu] = useState<MenuLink[]>([])

  useEffect(() => {    

    //console.log('setting links', links)

    setMenu(links)
    setIsOpen(true)

  }, [links])

  return (
      <> 
        <nav
          id='menu-link-nav'
          className={isOpen ? "open" : "close"}
        >
          <div 
            className="grid justify-end"
          >
            <button
              className="p-1 m-0"
              onClick={() => {
                setIsOpen(false)                
                onHasClosed()
              }}
            >
              X
            </button>
            <br />
          </div>          
          <p className='sub-menu-sections'>{title}</p> 
          <>
            {menu.map((link, index) => {

              return (
                <div
                  key={index}
                  className='grid grid-flow-col cols-1 justify-start gap-0'
                >
                  <Link
                    key={index}
                    className="menu-link menu-item on-primary "
                    href={link.route}
                    onClick={() => {
                      setIsOpen(false)
                      onHasLinked()
                    }}
                  >                                        
                    {link.title}
                  </Link>
                </div>
              )
            })}
          </>
        </nav>
      </>
  )
}
