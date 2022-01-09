import React, { useEffect, useState } from "react";

import { LocalRoutes, UIText, IDs } from '../../../config'

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

export const HomeHeader = () => {
  const [anchors, setAnchors] = useState(initAnchors)

  useEffect(() => {
    const academia = document.getElementById(IDs.academia);
    const apps = document.getElementById(IDs.apps)
    const blog = document.getElementById(IDs.blog)
    const books = document.getElementById(IDs.books)
    const flashFiction = document.getElementById(IDs.flashFiction)
    const misc = document.getElementById(IDs.misc)
    const poetry = document.getElementById(IDs.poetry)
    const songs = document.getElementById(IDs.songs)
    const stories = document.getElementById(IDs.stories);

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
        className="navbar-button"
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
        {UIText.academia}
      </button>
      <button
        className="navbar-button"
        onClick={() => {
          if (anchors.apps) {
            anchors.apps.scrollIntoView({
              block: "nearest",
              inline: "center",
              behavior: "smooth",
              alignToTop: false
            })
            anchors.apps.focus({preventScroll: true})
          }
        }}
      >
        {UIText.apps}
      </button>
      <button
        className="navbar-button"
        onClick={() => {
          if (anchors.blog) {
            anchors.blog.scrollIntoView({
              block: "nearest",
              inline: "center",
              behavior: "smooth",
              alignToTop: false
            })
            anchors.blog.focus({preventScroll: true})
          }
        }}
      >
        {UIText.blog}
      </button>
      <button
        className="navbar-button"
        onClick={() => {
          if (anchors.books) {
            anchors.books.scrollIntoView({
              block: "nearest",
              inline: "center",
              behavior: "smooth",
              alignToTop: false
            })
            anchors.books.focus({preventScroll: true})
          }
        }}
      >
        {UIText.books}
      </button>
      <button
        className="navbar-button"
        onClick={() => {
          if (anchors.flashFiction) {
            anchors.flashFiction.scrollIntoView({
              block: "nearest",
              inline: "center",
              behavior: "smooth",
              alignToTop: false
            })
            anchors.flashFiction.focus({preventScroll: true})
          }
        }}
      >
        {UIText.flashFiction}
      </button>
      <button
        className="navbar-button"
        onClick={() => {
          if (anchors.misc) {
            anchors.misc.scrollIntoView({
              block: "nearest",
              inline: "center",
              behavior: "smooth",
              alignToTop: false
            })
            anchors.misc.focus({preventScroll: true})
          }
        }}
      >
        {UIText.misc}
      </button>
      <button
        className="navbar-button"
        onClick={() => {
          if (anchors.poetry) {
            anchors.poetry.scrollIntoView({
              block: "nearest",
              inline: "center",
              behavior: "smooth",
              alignToTop: false
            })
            anchors.poetry.focus({preventScroll: true})
          }
        }}
      >
        {UIText.poetry}
      </button>
      <button
        className="navbar-button"
        onClick={() => {
          if (anchors.songs) {
            anchors.songs.scrollIntoView({
              block: "nearest",
              inline: "center",
              behavior: "smooth",
              alignToTop: false
            })
            anchors.songs.focus({preventScroll: true})
          }
        }}
      >
        {UIText.songs}
      </button>
      <button
        className="navbar-button"
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
        {UIText.stories}
      </button>
    </header>
  );
}
