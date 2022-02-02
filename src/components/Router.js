import React from "react";
import { Route, Routes } from "react-router"

import { Linker } from './site/Linker'
import { Content } from './site/Content'

import { siteSections } from '../config'

export const Router = () => {

  return (
    <Routes>
        {Object.keys(siteSections).map((section, index) => {
            const thisSection = siteSections[`${section}`]
            const sectionTitle =  thisSection.title
            // console.log('blah', section, thisSection)
            return (
              <React.Fragment key={index}>
                <Route
                    path={thisSection.route}
                    element={
                      <Linker
                        title={sectionTitle}
                        siteSections={siteSections}
                        sections={thisSection.sections}
                      />
                    }
                />
                {section !== "home" && Object.keys(thisSection.sections).map((mySection, thisIndex) => {
                  const myRoute = thisSection.sections[`${mySection}`].route
                  if ( myRoute ) {

                    const myId = thisSection.sections[`${mySection}`].id
                    const myTitle = thisSection.sections[`${mySection}`].title
                    const myContent = thisSection.sections[`${mySection}`].content
                    return (
                        <Route
                            key={index + "-" + thisIndex}
                            path={myRoute}
                            element={
                              <Content 
                                title={myTitle}
                                siteSections={siteSections}
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
              </React.Fragment>
            )
        })}
    </Routes>
  );
}
