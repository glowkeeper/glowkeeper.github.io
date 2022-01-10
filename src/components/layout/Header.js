import React, { useEffect, useState } from "react";

export const Header = (props) => {
  const [anchors, setAnchors] = useState([])
  const { sections } = props

  useEffect(() => {
    if (sections) {

      const anchors = Object.keys(sections).map(section => {
        const thisSection = sections[`${section}`]
        return (
          document.getElementById(thisSection.id)
        )
      })

      setAnchors(anchors)
    }

  }, [sections])

  return (
    <header>
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
    </header>
  );
}
