import React from "react";
import { Route, Routes } from "react-router"

import { Parent } from '../site/Parent'
import { Child } from '../site/Child'

import { siteSections } from '../../config'

export const Main = () => {

  return (
    <Routes>
        {Object.keys(siteSections).map((section, index) => {
            const thisSection = siteSections[`${section}`]
            return (
              <>
                <Route
                    path={thisSection.route}
                    element={<Parent sections={thisSection.sections} /> }
                />
                {section !== "home" && Object.keys(thisSection.sections).map((mySection, thisIndex) => {
                  const myRoute = thisSection.sections[`${mySection}`].route
                  const myId = thisSection.sections[`${mySection}`].id
                  const myContent = thisSection.sections[`${mySection}`].content
                  return (
                      <Route
                          path={myRoute}
                          element={<Child id={myId} content={myContent} /> }
                      />
                  )
                })}
              </>
            )
        })}
    </Routes>
  );
}
