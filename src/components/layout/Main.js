import { Route, Routes } from "react-router"

import { siteSections } from '../../config'

export const Main = () => {
  return (
    <Routes>
        {Object.keys(siteSections).map((section, index) => {
            const thisSection = siteSections[`${section}`]
            return (
                <Route
                    key={index}
                    path={thisSection.route}
                    element={thisSection.component()}
                />
            )
        })}
    </Routes>
  );
}
