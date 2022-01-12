import React, { useEffect, useState } from "react";

export const Header = (props) => {
  const [anchors, setAnchors] = useState([])
  const { sections } = props

  //console.log(sections)

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
    <header>
      <div id="context-menu">
        {sections && Object.keys(sections).map((section, index) => {
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
      </div>
      <>&nbsp;</>
    </header>
  );
}
