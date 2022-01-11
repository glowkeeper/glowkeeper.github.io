import React from "react";
import { Route, Routes } from "react-router"

import { Linker } from '../site/Linker'
import { Content } from '../site/Content'

import { siteSections } from '../../config'

export const Router = () => {

  return (
    <Routes>
        {Object.keys(siteSections).map((section, index) => {
            const thisSection = siteSections[`${section}`]
            return (
              <>
                <Route
                    path={thisSection.route}
                    element={<Linker sections={thisSection.sections} /> }
                />
                {section !== "home" && Object.keys(thisSection.sections).map((mySection, thisIndex) => {
                  const myRoute = thisSection.sections[`${mySection}`].route
                  const myId = thisSection.sections[`${mySection}`].id
                  const myContent = thisSection.sections[`${mySection}`].content
                  return (
                      <Route
                          path={myRoute}
                          element={<Content id={myId} content={myContent} /> }
                      />
                  )
                })}
              </>
            )
        })}
    </Routes>
  );
}