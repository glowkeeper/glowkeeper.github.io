import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import { LocalRoutes, UIText } from '../../config'

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

  const navigate = useNavigate()

  const getAnchors = () => {

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

  }

  useEffect(() => {
    getAnchors()
  }, [])

  const goHome = () => {
    navigate(LocalRoutes.home)
    getAnchors()
  }

  return (
    <header>
      <button
        className="navbar-button"
        onClick={() => {
          goHome()
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
          goHome()
          if (anchors.apps) {
            navigate(LocalRoutes.home)
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
          goHome()
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
          goHome()
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
          goHome()
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
          goHome()
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
          goHome()
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
          goHome()
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
          goHome()
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
