import { Link,useNavigate } from "react-router-dom"

import { LocalRoutes, UIText } from '../../config'

export const Home = () => {
  return (
    <>
      <Link to={LocalRoutes.academia}>
        <div
          tabIndex="0"
          id={LocalRoutes.academiaId}
        >
          {UIText.academia}
        </div>
      </Link>
      <div
        tabIndex="1"
        id={LocalRoutes.appsId}
      >
        {UIText.apps}
      </div>
      <div
        tabIndex="2"
        id={LocalRoutes.blogId}
      >
        {UIText.blog}
      </div>
      <div
        tabIndex="3"
        id={LocalRoutes.booksId}
      >
        {UIText.books}
      </div>
      <div
        tabIndex="4"
        id={LocalRoutes.flashId}
      >
        {UIText.flashFiction}
      </div>
      <div
        tabIndex="5"
        id={LocalRoutes.miscId}
      >
        {UIText.misc}
      </div>
      <div
        tabIndex="6"
        id={LocalRoutes.poetryId}
      >
        {UIText.poetry}
      </div>
      <div
        tabIndex="7"
        id={LocalRoutes.songsId}
      >
        {UIText.songs}
      </div>
      <div
        tabIndex="8"
        id={LocalRoutes.storiesId}
      >
        {UIText.stories}
      </div>
    </>
  );
}
