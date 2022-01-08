import { LocalRoutes } from '../../config'

export const Home = () => {
  return (
    <>
        <div id={LocalRoutes.academiaId}>academia</div>
        <div id={LocalRoutes.appsId}>apps</div>
        <div id={LocalRoutes.blogId}>blog</div>
        <div id={LocalRoutes.booksId}>books</div>
        <div id={LocalRoutes.flashId}>flash fiction</div>
        <div id={LocalRoutes.miscId}>misc</div>
        <div id={LocalRoutes.poetryId}>poetry</div>
        <div id={LocalRoutes.songsId}>songs</div>
        <div id={LocalRoutes.storiesId}>stories</div>
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
