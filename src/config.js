class LocalRoutes {

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
      static contact = `/contact`

      // flash fiction
      static 
}

class LocalRoutesFlashFiction {

  static eric = `${LocalRoutes.flashFiction}/eric`
  static fortunes = `${LocalRoutes.flashFiction}/fortunes-always-hiding` 
  static wisdom = `${LocalRoutes.flashFiction}/wisdom` 
}

export class UIText {

  static home = "home"

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
  static contact = "contact"

  // flash fiction
  static flash
}

export class UITextFlashFiction {

  static eric = "eric"
  static fortunes = "fortunes always hiding"
  static wisdom = "wisdom"
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

export const aboutSections = {
  contact: {
    id: "about",
    title: UIText.about,
    route: LocalRoutes.contact + "/about",
    src: "/assets/posts/about/about.md"
  },
}

export const cvSections = {
  cv: {
    id: "cv",
    title: UIText.cv,
    route: LocalRoutes.contact + "/cv",
    src: "/assets/posts/cv/cv.md"
  },
}

export const settingsSections = {
}

export const contactSections = {
  contact: {
    id: "contact",
    title: UIText.contact,
    route: LocalRoutes.contact + "/contact",
    src: "/assets/posts/contact/contact.md"
  },
}

export const academiaSections = {
  academia: {
    id: "academia",
    title: UIText.contact,
    route: LocalRoutes.academia + "/academia",
    src: "/assets/posts/academia/academia.md"
  },
}
export const appsSections = {}
export const blogSections = {}
export const booksSections = {}

export const flashFictionSections = {
  eric: {
    id: "flash-eric",
    title: UITextFlashFiction.eric,
    route: LocalRoutesFlashFiction.eric,
    src: "/assets/posts/flashFiction/eric.md"
  },
  fortunes: {
    id: "flash-fortunes",
    title: UITextFlashFiction.fortunes,
    route: LocalRoutesFlashFiction.fortunes,
    src: "/assets/posts/flashFiction/fortunesAlwaysHiding.md"
  },
  wisdom: {
    id: "flash-wisdom",
    title: UITextFlashFiction.wisdom,
    route: LocalRoutesFlashFiction.wisdom,
    src: "/assets/posts/flashFiction/wisdom.md"
  }
}

export const miscSections = {}
export const poetrySections = {}
export const songsSections = {}
export const storiesSections = {}

export const siteSections = {
  home: {
    id: "home",
    title: UIText.home,
    route: LocalRoutes.home,
    sections: homeSections
  },
  about: {
    id: "about",
    title: UIText.about,
    route: LocalRoutes.about,
    sections: aboutSections
  },
  cv: {
    id: "cv",
    title: UIText.cv,
    route: LocalRoutes.cv,
    sections: cvSections
  },
  contact: {
    id: "contact",
    title: UIText.contact,
    route: LocalRoutes.contact,
    sections: contactSections
  },
  settings: {
    id: "settings",
    title: UIText.settings,
    route: LocalRoutes.settings,
    sections: settingsSections
  },
  academia: {
    id: "academia",
    title: UIText.academia,
    route: LocalRoutes.academia,
    sections: academiaSections
  },
  apps: {
    id: "apps",
    title: UIText.apps,
    route: LocalRoutes.apps,
    sections: appsSections
  },
  blog: {
    id: "blog",
    title: UIText.blog,
    route: LocalRoutes.blog,
    sections: appsSections
  },
  books: {
    id: "books",
    title: UIText.books,
    route: LocalRoutes.books,
    sections: booksSections
  },
  flashFiction: {
    id: "flash-fiction",
    title: UIText.flashFiction,
    route: LocalRoutes.flashFiction,
    sections: flashFictionSections
  },
  misc: {
    id: "misc",
    title: UIText.misc,
    route: LocalRoutes.misc,
    sections: miscSections
  },
  poetry: {
    id: "poetry",
    title: UIText.poetry,
    route: LocalRoutes.poetry,
    sections: poetrySections
  },
  songs:  {
    id: "songs",
    title: UIText.songs,
    route: LocalRoutes.songs,
    sections: songsSections
  },
  stories: {
    id: "stories",
    title: UIText.stories,
    route: LocalRoutes.stories,
    sections: storiesSections
  }
}

