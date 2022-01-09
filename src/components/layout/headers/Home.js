import React, { useEffect, useState } from "react";

import { homeSections } from '../../../config'

export const HomeHeader = () => {
  const [anchors, setAnchors] = useState([])

  useEffect(() => {
    const anchors = Object.keys(homeSections).map(section => {
      const thisSection = homeSections[`${section}`]
      return (
        document.getElementById(thisSection.id)
      )
    })

    setAnchors(anchors)
  }, [])

  return (
    <header>
      {Object.keys(homeSections).map((section, index) => {
        const thisSection = homeSections[`${section}`]
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
