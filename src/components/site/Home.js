import { Link } from "react-router-dom"

import { HomeHeader } from '../layout/headers/Home'

import { LocalRoutes, UIText, IDs } from '../../config'

export const Home = () => {

  return (
    <>
      <HomeHeader />
      <main>
        <Link to={LocalRoutes.academia}>
          <div
            tabIndex="0"
            id={IDs.academia}
          >
            {UIText.academia}
          </div>
        </Link>
        <Link to={LocalRoutes.apps}>
          <div
            tabIndex="1"
            id={IDs.apps}
          >
            {UIText.apps}
          </div>
        </Link>
        <Link to={LocalRoutes.blog}>
          <div
            tabIndex="2"
            id={IDs.blog}
          >
            {UIText.blog}
          </div>
        </Link>
        <Link to={LocalRoutes.books}>
          <div
            tabIndex="3"
            id={IDs.books}
          >
            {UIText.books}
          </div>
        </Link>
        <Link to={LocalRoutes.flashFiction}>
          <div
            tabIndex="4"
            id={IDs.flashFiction}
          >
            {UIText.flashFiction}
          </div>
        </Link>
        <Link to={LocalRoutes.misc}>
          <div
            tabIndex="5"
            id={IDs.misc}
          >
            {UIText.misc}
          </div>
        </Link>
        <Link to={LocalRoutes.poetry}>
          <div
            tabIndex="6"
            id={IDs.poetry}
          >
            {UIText.poetry}
          </div>
        </Link>
        <Link to={LocalRoutes.songs}>
          <div
            tabIndex="7"
            id={IDs.songs}
          >
            {UIText.songs}
          </div>
        </Link>
        <Link to={LocalRoutes.stories}>
          <div
            tabIndex="8"
            id={IDs.stories}
          >
            {UIText.stories}
          </div>
        </Link>
      </main>
    </>
  );
}
