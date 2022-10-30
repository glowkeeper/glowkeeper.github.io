import { useState, useEffect } from 'react';

import { Link } from "react-router-dom"

import { siteSections as site, UIText } from '../../config'

export const MainMenuNew = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [siteSections, setSiteSections] = useState([])

  useEffect(() => {      

    const siteSections = Object.keys(site).map((section, index) => {
      const thisSection = site[section]                     
      return (  
        <Link 
            className="main"
            key={index}
            to={thisSection.route}
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
      <button
        className="main-link"
        onClick={() => {
          const mainOpen = !isOpen
          setIsOpen(mainOpen)
        }}
      >
        <p id="menu-burger">≡</p>
      </button>
      <nav 
        id="main-nav"
        className={isOpen ? "open" : "close"}
      >
        <button 
          className="main-link-close"
          onClick={() => setIsOpen(false)}
        >
          × close
        </button>
        <div id="main-items">
          <h4>{UIText.main} menu</h4>
          {siteSections}
        </div>
      </nav>            
    </>
  );
}
