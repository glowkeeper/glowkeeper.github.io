import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router"

import { Linker } from './site/Linker'
import { Content } from './site/Content'

import { siteSections as site } from '../config'

export const Router = (props) => {

  const { setTitle, setIsMenuOpen } = props

  const [siteSections, setSiteSections] = useState([])

  useEffect(() => {

    const siteSections = Object.keys(site).map((section, index) => {
      const thisSection = site[`${section}`]
      return (
        <React.Fragment key={index}>
          <Route
              path={thisSection.route}
              element={
                <Linker
                  setTitle={setTitle}
                  sections={thisSection.sections} 
                />
              }
          />
          {section !== "home" && Object.keys(thisSection.sections).map((mySection, thisIndex) => {
            const myRoute = thisSection.sections[`${mySection}`].route
            if ( myRoute ) {

              const myId = thisSection.sections[`${mySection}`].id
              const myContent = thisSection.sections[`${mySection}`].content
              return (
                  <Route
                    key={index + "-" + thisIndex}
                    path={myRoute}
                    element={
                      <Content 
                        setIsMenuOpen={setIsMenuOpen}
                        content={myContent}
                        id={myId} 
                      />
                    }
                  />
              )

            } else {
              return null
            }
          })}
          <Route
            path="*"
            element={
              <Content 
                setIsMenuOpen={setIsMenuOpen}
                content="/assets/posts/notFound.md"
                id="not-found" 
              />
            }
          />
        </React.Fragment>
      )
    })

    setSiteSections(siteSections)

  }, [setTitle, setIsMenuOpen])

  return (
    <Routes>
      {siteSections}
    </Routes>
  );
}
