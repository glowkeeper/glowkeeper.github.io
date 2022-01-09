import { Link } from "react-router-dom"

import { HomeHeader } from '../layout/headers/Home'

import { homeSections, siteSections } from '../../config'

export const Home = () => {

  return (
    <>
      <HomeHeader />
      <main id={siteSections.home.id}>
        {Object.keys(homeSections).map((section, index) => {
          const thisSection = homeSections[`${section}`]
          return (  
            <Link key={index} to={thisSection.route}>
              <div
                tabIndex={index}
                id={thisSection.id}
              >
                {thisSection.title}
              </div>
            </Link>    
          )
        })}
      </main>
    </>
  );
}
