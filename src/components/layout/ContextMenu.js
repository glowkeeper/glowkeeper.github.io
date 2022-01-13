import { useState, useEffect } from 'react';

export const ContextMenu = (props) => {
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
    <nav id="context-nav">
      <a className=".context-close" href="#close">x close</a>
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
