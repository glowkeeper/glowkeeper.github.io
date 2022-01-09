import { Link } from "react-router-dom"

import { HomeHeader } from '../layout/headers/HomeHeader'

import { LocalRoutes, UIText } from '../../config'

export const Home = () => {

  return (
    <>
      <HomeHeader />
      <main>
        <Link to={LocalRoutes.academia}>
          <div
            tabIndex="0"
            id={LocalRoutes.academiaId}
          >
            {UIText.academia}
          </div>
        </Link>
        <Link to={LocalRoutes.apps}>
          <div
            tabIndex="1"
            id={LocalRoutes.appsId}
          >
            {UIText.apps}
          </div>
        </Link>
        <Link to={LocalRoutes.blog}>
          <div
            tabIndex="2"
            id={LocalRoutes.blogId}
          >
            {UIText.blog}
          </div>
        </Link>
        <Link to={LocalRoutes.books}>
          <div
            tabIndex="3"
            id={LocalRoutes.booksId}
          >
            {UIText.books}
          </div>
        </Link>
        <Link to={LocalRoutes.flashFiction}>
          <div
            tabIndex="4"
            id={LocalRoutes.flashId}
          >
            {UIText.flashFiction}
          </div>
        </Link>
        <Link to={LocalRoutes.misc}>
          <div
            tabIndex="5"
            id={LocalRoutes.miscId}
          >
            {UIText.misc}
          </div>
        </Link>
        <Link to={LocalRoutes.poetry}>
          <div
            tabIndex="6"
            id={LocalRoutes.poetryId}
          >
            {UIText.poetry}
          </div>
        </Link>
        <Link to={LocalRoutes.songs}>
          <div
            tabIndex="7"
            id={LocalRoutes.songsId}
          >
            {UIText.songs}
          </div>
        </Link>
        <Link to={LocalRoutes.stories}>
          <div
            tabIndex="8"
            id={LocalRoutes.storiesId}
          >
            {UIText.stories}
          </div>
        </Link>
      </main>
    </>
  );
}
