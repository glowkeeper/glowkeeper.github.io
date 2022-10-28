import { useState, useEffect } from 'react';

export const ContextMenu = (props) => {

  const {title, sections} = props

  const [thisTitle, setThisTitle] = useState("")
  const [isOpen, setIsOpen] = useState(true) 
  const [anchors, setAnchors] = useState([])

  useEffect(() => {

    const anchors = Object.keys(sections).map(section => {
      const thisSection = sections[`${section}`]
      //console.log('this section', thisSection, thisSection.id)
      return (
        document.getElementById(thisSection.id)
      )
    })

    anchors[0].scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
      alignToTop: false
    })

    if (sections && (title !== thisTitle) && title !== "home") {
      //console.log('anchors', anchors)
      setAnchors(anchors)
      setThisTitle(title)
      setIsOpen(true)
    }

  }, [title, thisTitle, sections])

  return (
    <>
      <nav 
        id="context-nav"
        className={isOpen ? "open" : "close"}
      >
        <button 
          className="context-link-close"
          onClick={() => setIsOpen(false)}
        >
          × close
        </button>
        <div id="context-items">
          <h4>{thisTitle} menu</h4>
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

