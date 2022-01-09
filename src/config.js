import { Home } from './components/site/Home';
import { About } from './components/site/About';
import { Academia } from './components/site/Academia';
import { Apps } from './components/site/Apps';
import { Blog } from './components/site/Blog';
import { Books } from './components/site/Books';
import { Contact } from './components/site/Contact';
import { CV } from './components/site/CV';
import { FlashFiction } from './components/site/FlashFiction';
import { Misc } from './components/site/Misc';
import { Poetry } from './components/site/Poetry';
import { Settings } from './components/site/Settings';
import { Songs } from './components/site/Songs';
import { Stories } from './components/site/Stories';
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
}

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

export const siteSections = {
  home: {
    id: "home",
    title: UIText.home,
    route: LocalRoutes.home,
    component: () => <Home />
  },
  about: {
    id: "about",
    title: UIText.about,
    route: LocalRoutes.about,
    component: () => <About />
  },
  cv: {
    id: "cv",
    title: UIText.cv,
    route: LocalRoutes.cv,
    component: () => <CV />
  },
  contact: {
    id: "contact",
    title: UIText.contact,
    route: LocalRoutes.contact,
    component: () => <Contact />
  },
  settings: {
    id: "settings",
    title: UIText.settings,
    route: LocalRoutes.settings,
    component: () => <Settings />
  },
  academia: {
    id: "academia",
    title: UIText.academia,
    route: LocalRoutes.academia,
    component: () => <Academia />
  },
  apps: {
    id: "apps",
    title: UIText.apps,
    route: LocalRoutes.apps,
    component: () => <Apps />
  },
  blog: {
    id: "blog",
    title: UIText.blog,
    route: LocalRoutes.blog,
    component: () => <Blog />
  },
  books: {
    id: "books",
    title: UIText.books,
    route: LocalRoutes.books,
    component: () => <Books />
  },
  flashFiction: {
    id: "flash-fiction",
    title: UIText.flashFiction,
    route: LocalRoutes.flashFiction,
    component: () => <FlashFiction />
  },
  misc: {
    id: "misc",
    title: UIText.misc,
    route: LocalRoutes.misc,
    component: () => <Misc />
  },
  poetry: {
    id: "poetry",
    title: UIText.poetry,
    route: LocalRoutes.poetry,
    component: () => <Poetry />
  },
  songs:  {
    id: "songs",
    title: UIText.songs,
    route: LocalRoutes.songs,
    component: () => <Songs />
  },
  stories: {
    id: "stories",
    title: UIText.stories,
    route: LocalRoutes.stories,
    component: () => <Stories />
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

