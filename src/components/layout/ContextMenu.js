import { useState, useEffect } from 'react';

import { Link } from "react-router-dom"

import { UIText } from '../../config'

export const ContextMenu = (props) => {
  const [anchors, setAnchors] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const {sections, id} = props

  useEffect(() => {
    if (sections) {

      const anchors = Object.keys(sections).map(section => {
        const thisSection = sections[`${section}`]
        // console.log('this section', thisSection, thisSection.id)
        return (
          document.getElementById(thisSection.id)
        )
      })

      //console.log('anchors', anchors)

      setAnchors(anchors)
    }

  }, [sections])


  //console.log('my sections', sections)

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
                <button
                  key={index}
                  className="navbar-button"
                  onClick={() => {
                    if (anchors[index]) {
                      anchors[index].scrollIntoView({
                        block: "nearest",
                        inline: "center",
                        behavior: "smooth",
                        alignToTop: false
                      })
                      anchors[index].focus({preventScroll: true})
                    }
                  }}
                >
                  {thisSection.title}
                </button>   
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


/* 
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
                  */   
