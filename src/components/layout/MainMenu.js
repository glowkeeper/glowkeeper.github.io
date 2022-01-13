import { useState } from 'react'
import { Link } from "react-router-dom"

export const MainMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const {sections} = props

  return (
    <>
      <button
        className="main-link"
        onClick={() => setIsOpen(true)}
      >
        main menu
      </button>
      <nav 
        id="main-nav"
        className={isOpen ? "open" : "close"}
      >
        <button 
          className="main-link-close"
          onClick={() => setIsOpen(false)}
        >
          close ×
        </button>
        <div id="main-items">
          {Object.keys(sections).map((section, index) => {
            const thisSection = sections[`${section}`]
            return (  
                <Link 
                    className="content"
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
          })}
        </div>
      </nav>
      
    </>
  );
}
