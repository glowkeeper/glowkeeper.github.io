import React, { useEffect, useState } from "react";

import {Menu} from './Menu';

export const Header = (props) => {
  const [anchors, setAnchors] = useState([])
  const { siteSections, sections } = props

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
        {sections && <Menu sections={sections} id="navbar-button" />}
      </div>
      <>&nbsp;</>

      <div id="site-menu">
        {siteSections && <Menu sections={siteSections} id="site-menu" />}
      </div>
    </header>
  );
}
