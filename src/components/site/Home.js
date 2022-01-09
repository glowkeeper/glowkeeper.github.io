import { LocalRoutes } from '../../config'

export const Home = () => {
  return (
    <>
        <div tabIndex="0" id={LocalRoutes.academiaId}>academia</div>
        <div tabIndex="1" id={LocalRoutes.appsId}>apps</div>
        <div tabIndex="2" id={LocalRoutes.blogId}>blog</div>
        <div tabIndex="3" id={LocalRoutes.booksId}>books</div>
        <div tabIndex="4" id={LocalRoutes.flashId}>flash fiction</div>
        <div tabIndex="5" id={LocalRoutes.miscId}>misc</div>
        <div tabIndex="6" id={LocalRoutes.poetryId}>poetry</div>
        <div tabIndex="7" id={LocalRoutes.songsId}>songs</div>
        <div tabIndex="8" id={LocalRoutes.storiesId}>stories</div>
    </>
  );
}

/*
#home-academia {
  height: 100%;

}

#home-apps {
  height: 100%;

}

#home-books {
  height: 100%;

}

#home-cv {
  height: 100%;

}

#home-flash-fiction {
  height: 100%;

}

#home-misc {
  height: 100%;

}

#home-poetry {
  height: 100%;

}

#home-songs {
  height: 100%;

}

#home-stories {
  height: 100%;

}

#home-contact {
  height: 100%;

}
*/
