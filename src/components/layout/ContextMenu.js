import { useState, useEffect } from 'react';

export const ContextMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [anchors, setAnchors] = useState([])
  const {sections} = props

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

  return (
    <>      
      <button
        className="context-link"
        onClick={() => setIsOpen(true)}
      >
        context menu
      </button>
      <nav 
        id="context-nav"
        className={isOpen ? "open" : "close"}
      >
        <button 
          className="context-link-close"
          onClick={() => setIsOpen(false)}
        >
          x close
        </button>
        <div id="context-items">
          {Object.keys(sections).map((section, index) => {
            const thisSection = sections[`${section}`]
            return (  
              <button
                key={index}
                className="context-link"
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
        </div>
      </nav>
    </>
  );
}

