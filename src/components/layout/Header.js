import React, { useEffect, useState } from "react";
import { LocalRoutes } from '../../config'

const initAnchors = {
  academia: null,
  apps: null,
  blog: null,
  books: null,
  flashFiction: null,
  misc: null,
  poetry: null,
  songs: null,
  stories: null
}

export const Header = () => {
  const [anchors, setAnchors] = useState(initAnchors)

  useEffect(() => {
    const academia = document.getElementById(LocalRoutes.academiaId);
    const apps = document.getElementById(LocalRoutes.appsId)
    const blog = document.getElementById(LocalRoutes.blogId)
    const books = document.getElementById(LocalRoutes.booksId)
    const flashFiction = document.getElementById(LocalRoutes.flashId)
    const misc = document.getElementById(LocalRoutes.miscId)
    const poetry = document.getElementById(LocalRoutes.poetryId)
    const songs = document.getElementById(LocalRoutes.songsId)
    const stories = document.getElementById(LocalRoutes.storiesId);

    setAnchors({
      academia: academia,
      apps: apps,
      blog: blog,
      books: books,
      flashFiction: flashFiction,
      misc: misc,
      poetry: poetry,
      songs: songs,
      stories: stories
    })
  }, [])

  return (
    <header>
      <button
        onClick={() => {
          if (anchors.academia) {
            anchors.academia.scrollIntoView({
              block: "nearest",
              inline: "center",
              behavior: "smooth",
              alignToTop: false
            })
            anchors.academia.focus({preventScroll: true})
          }
        }}
      >
        Academia
      </button>
      <button
        onClick={() => {
          if (anchors.stories) {
            anchors.stories.scrollIntoView({
              block: "nearest",
              inline: "center",
              behavior: "smooth",
              alignToTop: false
            })
            anchors.stories.focus({preventScroll: true})
          }
        }}
      >
        Stories
      </button>
    </header>
  );
}
