import { useState } from 'react';

import { Link } from "react-router-dom"

import { UIText } from '../../config'

export const MainMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const {sections, id} = props

  // console.log('my sections', sections)

  return (
    <>
      <button 
        id={id}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {isOpen ? (
          <>
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
          </>
        ) : (
          <p>more blah</p>
        )}
      </button>
    </>
  );
}
