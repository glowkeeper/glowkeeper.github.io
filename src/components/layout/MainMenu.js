import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom"

import { siteSections as site } from '../../config'

export const MainMenu = (props) => {
  const { setTitle } = props

  const [isOpen, setIsOpen] = useState(false)
  const [siteSections, setSiteSections] = useState([])
  const [expandIndex, setExpandIndex] = useState(0)

  //console.log('rendering main memnu')

  document.body.scrollIntoView({behavior: "smooth"});

  useEffect(() => {  
    
    const siteSections = Object.keys(site).map((section, index) => {
      const thisSection = site[section]  
      return ( 
        <Link 
          className="main"
          key={index}
          to={thisSection.route}
          onClick={() => {
            setTitle(thisSection.title)
            setExpandIndex(index)
          }}
        >
          <div
              tabIndex={index}
              id={thisSection.id}
          >
              {thisSection.title}
          </div>
        </Link> 
      )
    })
    setSiteSections(siteSections)
  }, [])

  return (
    <>
      {/* Menu burger - just leave this open - the actual menu (below) just slides out over it */}

      <button
        className="main-link"
        onClick={() => {
          const mainOpen = !isOpen
          setIsOpen(mainOpen)
        }}
      >
        <p id="menu-burger">≡</p>
      </button>

      {/* the menu */}

      <nav 
        id="main-nav"
        className={isOpen ? "open" : "close"}
      >
        <button 
          className="main-link-close"
          onClick={() => {
            setExpandIndex(0)
            setIsOpen(false)
          }}
        >
          × close
        </button>
        <div id="main-items">
          {expandIndex === 0 ? (
            <>
              {siteSections.map((section, index) => {
                if ( index === 0 ) {
                  return (
                    <>
                      {section} 
                    </>
                  )
                } else {
                  return (
                    <div className="expander">
                      {section} &nbsp; {'⇨'}
                    </div>
                  )
                }
              })}
            </>
          ) : (
            <>
              {Object.keys(site).map((section, index) => {
                  const thisSection = site[section]
                  if ( index === expandIndex ) {
                    return (
                      <>
                        <div className="expander">
                          {siteSections[index]} &nbsp; {'⇩'}
                        </div>         
                        {Object.keys(thisSection.sections).map((mySection, thisIndex) => {
                          return (  
                            <button
                              key={index + " " + thisIndex}
                              className="context-link"
                              onClick={() => {
                                const myAnchor = document.getElementById(thisSection.sections[mySection].id)
                                if (myAnchor) {
                                  myAnchor.scrollIntoView({
                                    block: "nearest",
                                    inline: "center",
                                    behavior: "smooth",
                                    alignToTop: false
                                  })
                                  myAnchor.focus({preventScroll: true})
                                }
                              }}
                            >
                              {thisSection.sections[mySection].title}
                            </button>   
                          )
                        })}
                      </>
                    )
                  } else {
                    if ( index ) {
                      return (
                        <div className="expander">
                          {siteSections[index]} &nbsp; {'⇨'}
                        </div>
                      )
                    } else {
                      return (
                        <div className="expander">
                          {siteSections[index]} &nbsp; &nbsp;
                        </div>
                      )
                    }
                  }
              })}
            </>
          )}
        </div>
      </nav>            
    </>
  );
}
