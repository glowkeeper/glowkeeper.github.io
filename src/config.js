export class UIText {

  static academia = "academia"
  static apps = "apps"
  static blog = "blog"
  static books = "books"
  static flashFiction = "flash fiction"
  static misc = "miscellany"
  static poetry = "poetry"
  static songs = "songs"
  static stories = "stories"

  static about = "about"
  static cv = "cv"
  static settings = "settings"
}
export class LocalRoutes {

      static home = "/"

      static academia = `/academia`
      static apps = `/apps`
      static blog = `/blog`
      static books = `/books`
      static flashFiction = `/flash-fiction`
      static misc = `/miscellany`
      static poetry = `/poetry`
      static songs = `/songs`
      static stories = `/stories`

      static about = `/about`
      static cv = `/cv`
      static settings = `/settings`
}

export const siteSections = {
  home: {
    id: "home",
    title: UIText.home,
    route: LocalRoutes.home
  },
  about: {
    id: "about",
    title: UIText.about,
    route: LocalRoutes.about
  },
  cv: {
    id: "cv",
    title: UIText.cv,
    route: LocalRoutes.cv
  },
  settings: {
    id: "settings",
    title: UIText.settings,
    route: LocalRoutes.settings
  },
  academia: {
    id: "academia",
    title: UIText.academia,
    route: LocalRoutes.academia
  },
  apps: {
    id: "apps",
    title: UIText.apps,
    route: LocalRoutes.apps
  },
  blog: {
    id: "blog",
    title: UIText.blog,
    route: LocalRoutes.blog
  },
  books: {
    id: "books",
    title: UIText.books,
    route: LocalRoutes.books
  },
  flashFiction: {
    id: "flash-fiction",
    title: UIText.flashFiction,
    route: LocalRoutes.flashFiction
  },
  misc: {
    id: "misc",
    title: UIText.misc,
    route: LocalRoutes.misc
  },
  poetry: {
    id: "poetry",
    title: UIText.poetry,
    route: LocalRoutes.poetry
  },
  songs:  {
    id: "songs",
    title: UIText.songs,
    route: LocalRoutes.songs
  },
  stories: {
    id: "stories",
    title: UIText.stories,
    route: LocalRoutes.stories
  }
}

export const homeSections = {
  academia: {
    id: "home-academia",
    title: UIText.academia,
    route: LocalRoutes.academia
  },
  apps: {
    id: "home-apps",
    title: UIText.apps,
    route: LocalRoutes.apps
  },
  blog: {
    id: "home-blog",
    title: UIText.blog,
    route: LocalRoutes.blog
  },
  books: {
    id: "home-books",
    title: UIText.books,
    route: LocalRoutes.books
  },
  flashFiction: {
    id: "home-flash-fiction",
    title: UIText.flashFiction,
    route: LocalRoutes.flashFiction
  },
  misc: {
    id: "home-misc",
    title: UIText.misc,
    route: LocalRoutes.misc
  },
  poetry: {
    id: "home-poetry",
    title: UIText.poetry,
    route: LocalRoutes.poetry
  },
  songs:  {
    id: "home-songs",
    title: UIText.songs,
    route: LocalRoutes.songs
  },
  stories: {
    id: "home-stories",
    title: UIText.stories,
    route: LocalRoutes.stories
  }
}

