export class System {
  static themeKey = 'theme'
  static darkTheme = 'dark'
  static lightTheme = 'light'
}

export class LocalRoutes {

      static home = "/"
      static about = `/about`
      static academia = `/academia`
      static apps = `/apps`
      static blog = `/blog`
      static books = `/books`
      static flashFiction = `/flash-fiction`
      static misc = `/miscellany`
      static poetry = `/poetry`
      static songs = `/songs`
      static stories = `/stories`
}

export class LocalRoutesAbout {

  static contact = `${LocalRoutes.about}/contact` 
  static cv = `${LocalRoutes.about}/cv` 
  static info = `${LocalRoutes.about}/info` 
  static license = `${LocalRoutes.about}/site-license`
}

export class LocalRoutesAcademia {

  static teaching = `${LocalRoutes.academia}/teaching`
  static phd = `${LocalRoutes.academia}/phd` 
  static msc = `${LocalRoutes.academia}/msc` 
}

class LocalRoutesFlashFiction {

  static eric = `${LocalRoutes.flashFiction}/eric`
  static fortunes = `${LocalRoutes.flashFiction}/fortunes-always-hiding` 
  static wisdom = `${LocalRoutes.flashFiction}/wisdom` 
}

class LocalRoutesMisc {

  static anotherGreatEscape = `${LocalRoutes.misc}/another-great-escape`
  static championsOfEurope = `${LocalRoutes.misc}/champions-of-europe`
  static declansLingerie = `${LocalRoutes.misc}/declans-lingerie`
  static jokes = `${LocalRoutes.misc}/jokes`
  static myGreatEscape = `${LocalRoutes.misc}/my-great-escape`
  static patience = `${LocalRoutes.misc}/patience`
  static scotlandEngland = `${LocalRoutes.misc}/scotland-vs-england`
  static westHamEverton = `${LocalRoutes.misc}/west-ham-vs-everton`
  static wind = `${LocalRoutes.misc}/wind`
  static worldCupSemi = `${LocalRoutes.misc}/world-cup-semi`
}

export class LocalRoutesPoetry {
  
  static averse = `${LocalRoutes.poetry}/averse`
  static balls = `${LocalRoutes.poetry}/ballsShmalls`
  static bandsBoycottBarclays = `${LocalRoutes.poetry}/bandsBoycottBarclays`
  static brighton = `${LocalRoutes.poetry}/brighton`
  static difficult = `${LocalRoutes.poetry}/difficult`
  static dreamland = `${LocalRoutes.poetry}/dreamland`
  static eton = `${LocalRoutes.poetry}/eton`
  static goldenBrown = `${LocalRoutes.poetry}/golden-brown`
  static gregorian = `${LocalRoutes.poetry}/gregorian`
  static if = `${LocalRoutes.poetry}/if`
  static iKneel = `${LocalRoutes.poetry}/i-kneel`
  static ironies = `${LocalRoutes.poetry}/ironies`
  static kane = `${LocalRoutes.poetry}/kane`
  static lamb = `${LocalRoutes.poetry}/lamb`
  static love = `${LocalRoutes.poetry}/love`
  static magic = `${LocalRoutes.poetry}/magic`
  static meaning = `${LocalRoutes.poetry}/meaning`
  static milkAfterIvor = `${LocalRoutes.poetry}/milk-after-ivor`
  static moles = `${LocalRoutes.poetry}/moles`
  static monkey = `${LocalRoutes.poetry}/monkey`
  static notChristmas = `${LocalRoutes.poetry}/not-christmas`
  static nuts = `${LocalRoutes.poetry}/nuts`
  static orgreave = `${LocalRoutes.poetry}/orgreave`
  static pointless = `${LocalRoutes.poetry}/pointless`
  static prudictive = `${LocalRoutes.poetry}/prudictive`
  static santaClaus = `${LocalRoutes.poetry}/santa-claus`
  static seaGlass = `${LocalRoutes.poetry}/sea-glass`
  static soonToBe73 = `${LocalRoutes.poetry}/soon-to-be-73`
  static soup = `${LocalRoutes.poetry}/soup`
  static thankless = `${LocalRoutes.poetry}/thankless`
  static theRoad = `${LocalRoutes.poetry}/the-road`
  static winter = `${LocalRoutes.poetry}/winter`
}

export class LocalRoutesSongs {

  static collegeCampus = `${LocalRoutes.songs}/college-campus`
  static doWhatIWant = `${LocalRoutes.songs}/do-what-i-want`
  static echoChamber = `${LocalRoutes.songs}/echo-chamber`
  static if = `${LocalRoutes.songs}/if`
  static iRememberWhen = `${LocalRoutes.songs}/i-remember-when`
  static onTheStreet = `${LocalRoutes.songs}/on-the-street`
  static whatsWrongWithNow = `${LocalRoutes.songs}/whats-wrong-with-now`
}

export class LocalRoutesStories {

  static change = `${LocalRoutes.stories}/change`
  static frederick = `${LocalRoutes.stories}/frederick`
  static freedom = `${LocalRoutes.stories}/freedom`
  static gratitude = `${LocalRoutes.stories}/gratitude`
  static minusculus = `${LocalRoutes.stories}/minusculus`
  static theDruid = `${LocalRoutes.stories}/the-druid`
  static theEarthAndTheMoon = `${LocalRoutes.stories}/the-earth-and-the-moon`
  static theHopeOfGods = `${LocalRoutes.stories}/the-hope-of-gods`
  static theKnucker = `${LocalRoutes.stories}/the-knucker`
  static theMillwright = `${LocalRoutes.stories}/the-millwright`
}

export class UIText {

  static title = "Dr Steve Huckle"

  static home = "home"
  static main = "main"

  static about = "about"
  static academia = "academia"
  static apps = "apps"
  static blog = "blog"
  static books = "books"
  static flashFiction = "flash fiction"
  static misc = "miscellany"
  static poetry = "poetry"
  static songs = "songs"
  static stories = "stories"

  static copyright = "© 2022, Dr Steve Huckle"

  static eProfessional = "e-professional: s.huckle@sussex.ac.uk"
  static ePersonal = "e-personal: steve.huckle@gmail.com"

  static darkMode = "dark mode"
  static lightMode = "light mode"
}

export class UITextAbout {

  static contact = "contact"
  static cv = "cv"
  static animated = "animated"
  static info = "site info"
}

export class UITextAcademia {

  static teaching = "teaching"
  static phd = "phd"
  static msc = "msc"
}

export class UITextApps {

  static mark = "mark"
  static storymaker = "storymaker"
  static rectangles = "rectangles"
  static calculator = "calculator"
}

export class UITextBooks {

  static myAbi = "my abi"
  static storiesFromTheCampfire = "stories from the campfire"
}

export class UITextFlashFiction {

  static eric = "eric"
  static fortunes = "fortunes always hiding"
  static wisdom = "wisdom"
}

export class UITextMisc {

  static anotherGreatEscape = "another great escape"
  static championsOfEurope = "champions of europe"
  static declansLingerie = "declan's lingerie"
  static jokes = "jokes"
  static myGreatEscape = "my great escape"
  static patience = "patience"
  static scotlandEngland = "scotland vs england"
  static westHamEverton = "west ham vs everton"
  static wind = "wind"
  static worldCupSemi = "world cup semi"
}

export class UITextPoetry {

  static averse = "i be averse"
  static balls = "balls shmalls"
  static bandsBoycottBarclays = "bands boycott barclays"
  static brighton = "brighton"
  static difficult = "difficult"
  static dreamland = "dreamland"
  static eton = "old eton"
  static goldenBrown = "golden brown"
  static gregorian = "gregorian song"
  static if = "if"
  static iKneel = "i kneel"
  static ironies = "ironies"
  static kane = "kane"
  static lamb = "lamb"
  static love = "love"
  static magic = "magic"
  static meaning = "meaning"
  static milkAfterIvor = "milk after ivor"
  static moles = "moles"
  static monkey = "monkey"
  static notChristmas = "not christmas"
  static nuts = "nuts"
  static orgreave = "orgreave"
  static pointless = "pointless"
  static prudictive = "prudictive"
  static santaClaus = "santa claus"
  static seaGlass = "sea glass"
  static soonToBe73 = "soon to be 73"
  static soup = "soup"
  static thankless = "thankless"
  static theRoad = "the road"
  static winter = "winter"
}

export class UITextSongs {

  static collegeCampus = "college campus"
  static doWhatIWant = "do what i want"
  static echoChamber = "echo chamber"
  static if = "if"
  static iRememberWhen = "i remember when"
  static onTheStreet = "on the street"
  static whatsWrongWithNow = "what's wrong with now"
}

export class UITextStories {

  static change = "change"
  static frederick = "frederick"
  static freedom = "freedom"
  static gratitude = "gratitude"
  static minusculus = "minusculus"
  static theDruid = "the druid"
  static theEarthAndTheMoon = "the earth and the moon"
  static theHopeOfGods = "the hope of gods"
  static theKnucker = "the knucker"
  static theMillwright = "the millwright"
}

export const homeSections = {
  about: {
    id: "home-about",
    title: UIText.about,
    subText: "info about Dr Huckle",
    route: LocalRoutes.about
  },
  academia: {
    id: "home-academia",
    title: UIText.academia,
    subText: "all things academia",
    route: LocalRoutes.academia
  },
  apps: {
    id: "home-apps",
    title: UIText.apps,
    subText: "Dr Huckle's software",
    route: LocalRoutes.apps
  },
  blog: {
    id: "home-blog",
    title: UIText.blog,
    subText: "technology blog via Dr Huckle's storymaker app'",
    route: LocalRoutes.blog
  },
  books: {
    id: "home-books",
    title: UIText.books,
    subText: "not yet published books",
    route: LocalRoutes.books
  },
  flashFiction: {
    id: "home-flash-fiction",
    subText: "short, sharp and fun",
    title: UIText.flashFiction,
    route: LocalRoutes.flashFiction
  },
  misc: {
    id: "home-misc",
    title: UIText.misc,
    subText: "stuff that had nowhere else to go",
    route: LocalRoutes.misc
  },
  poetry: {
    id: "home-poetry",
    title: UIText.poetry,
    subText: "some re-imagining of popular classics alongside some original inspirations",
    route: LocalRoutes.poetry
  },
  songs:  {
    id: "home-songs",
    title: UIText.songs,
    subText: "punk acoustic",
    route: LocalRoutes.songs
  },
  stories: {
    id: "home-stories",
    title: UIText.stories,
    subText: "longer than flash fiction, shorter than a book",
    route: LocalRoutes.stories
  }
}

export const aboutSections = {
  contact: {
    id: "about-contact",
    title: UITextAbout.contact,
    subText: "send an email",
    route: LocalRoutesAbout.contact,
    content: "/assets/posts/about/contact.md"
  },
  cv: {
    id: "about-cv",
    title: UITextAbout.cv,
    subText: "the curriculum vitae of Dr Huckle",
    route: LocalRoutesAbout.cv,
    content: "/assets/posts/about/cv.md"
  },
  animated: {
    id: "about-animated",
    title: UITextAbout.animated,
    subText: "make Dr Huckle run and jump",
    route: "",
    content: "https://huckle.studio/animated-huckle/"
  },
  info: {
    id: "about-info",
    title: UITextAbout.info,
    subText: "info about the content on this site",
    route: LocalRoutesAbout.info,
    content: "/assets/posts/about/info.md"
  }
}

export const academiaSections = {
  teaching: {
    id: "academia-teaching",
    title: UITextAcademia.teaching,
    subText: "info about the stuff Dr Huckle teaches",
    route: LocalRoutesAcademia.teaching,
    content: "/assets/posts/academia/teaching.md"
  },
  phd: {
    id: "academia-phd",
    title: UITextAcademia.phd,
    subText: "how Dr Huckle got his salutation",
    route: LocalRoutesAcademia.phd,
    content: "/assets/posts/academia/phd.md"
  },
  msc: {
    id: "academia-msc",
    title: UITextAcademia.msc,
    subText: "eco-conscious postgraduate studies",
    route: LocalRoutesAcademia.msc,
    content: "/assets/posts/academia/msc.md"
  },
}

export const appsSections = {
  mark: {
    id: "apps-mark",
    title: UITextApps.mark,
    subText: "ai-assisted assessment",
    route: "",
    content: "https://mark.education/"
  },
  storymaker: {
    id: "apps-storymaker",
    title: UITextApps.storymaker,
    subText: "ai-based text generation",
    route: "",
    content: "https://huckle.studio/storymaker/"
  },
  rectangles: {
    id: "apps-rectangles",
    title: UITextApps.rectangles,
    subText: "how many rectangles are there?",
    route: "",
    content: "https://huckle.studio/rectangle-react/"
  },
  calculator: {
    id: "apps-calculator",
    title: UITextApps.calculator,
    subText: "simple calculator",
    route: "",
    content: "https://huckle.studio/simple-calculator/"
  },
}

/*Use keys that enable ordering so that latest entry can be first*/
export const blogSections = {
  "999996": {
    id: "blog-12042023",
    title: "12th April 2023",
    subText: "AI and the Legal Profession",
    route: `${LocalRoutes.blog}/12April2023`,
    content: "/assets/posts/blog/12April2023.md"
  },
  "999997": {
    id: "blog-31032023",
    title: "31st March 2023",
    subText: "Elon Musk and Others Call for Pause on AI, Citing ‘Profound Risks to Society’",
    route: `${LocalRoutes.blog}/31March2023`,
    content: "/assets/posts/blog/31March2023.md"
  },
  "999998": {
    id: "blog-26032023",
    title: "26th March 2023",
    subText: "How to Become an Expert on AI",
    route: `${LocalRoutes.blog}/26March2023`,
    content: "/assets/posts/blog/26March2023.md"
  },
  "999999": {
    id: "blog-25032023",
    title: "25th March 2023",
    subText: "Gordon E. Moore, Intel Co-Founder Behind Moore’s Law, Dies at 94",
    route: `${LocalRoutes.blog}/25March2023`,
    content: "/assets/posts/blog/25March2023.md"
  }
}

export const booksSections = {
  myAbi: {
    id: "books-my-abi",
    title: UITextBooks.myAbi,
    subText: "the story of a father and his daughter's battle against a brain tumour",
    route: "",
    content: "https://app.gitbook.com/@stevehuckle/s/my-abi/"
  },
  storiesFromTheCampfire: {
    id: "books-stories-from-the-campfire",
    title: UITextBooks.storiesFromTheCampfire,
    subText: "campfire stories from Brighton Buddhist Centre's family retreat",
    route: "",
    content: "https://app.gitbook.com/@stevehuckle/s/stories-from-the-campfire/"
  },
}

export const flashFictionSections = {
  eric: {
    id: "flash-eric",
    title: UITextFlashFiction.eric,
    subText: "it's said that I might be Eric, but I don't live in a tree",
    route: LocalRoutesFlashFiction.eric,
    content: "/assets/posts/flashFiction/eric.md"
  },
  fortunes: {
    id: "flash-fortunes",
    title: UITextFlashFiction.fortunes,
    subText: "I entered a version of this story for a Songs of Praise FA Cup Fans Choir Competition. Songs of Praise were looking for three-hundred-word stories that reflected the passion of the FA Cup. The winners would get to sing Abide with Me, backed by a brass band, in front of 90,000 people at the FA Cup Final at Wembley Stadium. The story got shortlisted. Alas, it didn't win",
    route: LocalRoutesFlashFiction.fortunes,
    content: "/assets/posts/flashFiction/fortunesAlwaysHiding.md"
  },
  wisdom: {
    id: "flash-wisdom",
    title: UITextFlashFiction.wisdom,
    subText: "sometimes even the wise must acknowledge a higher wisdom",
    route: LocalRoutesFlashFiction.wisdom,
    content: "/assets/posts/flashFiction/wisdom.md"
  }
}

export const miscSections = {
  anotherGreatEscape: {
    id: "misc-another-great-escape",
    title: UITextMisc.anotherGreatEscape,
    subText: "three days of music and fun at Brighton's 2018 Great Escape festival",
    route: LocalRoutesMisc.anotherGreatEscape,
    content: "/assets/posts/misc/anotherGreatEscape.md"
  },
  championsOfEurope: {
    id: "misc-champions-of-europe",
    title: UITextMisc.championsOfEurope,
    subText: "West Ham win the Europa Conference League",
    route: LocalRoutesMisc.championsOfEurope,
    content: "/assets/posts/misc/championsOfEurope.md"
  },
  declansLingerie: {
    id: "misc-declans-lingerie",
    title: UITextMisc.declansLingerie,
    subText: "the spirit of declan rice",
    route: LocalRoutesMisc.declansLingerie,
    content: "/assets/posts/misc/declansLingerie.md"
  },
  jokes: {
    id: "misc-jokes",
    title: UITextMisc.jokes,
    subText: "my occasional side-splitters",
    route: LocalRoutesMisc.jokes,
    content: "/assets/posts/misc/jokes.md"
  },
  myGreatEscape: {
    id: "misc-my-great-escape",
    title: UITextMisc.myGreatEscape,
    subText: "three days of music and fun at Brighton's 2017 Great Escape festival",
    route: LocalRoutesMisc.myGreatEscape,
    content: "/assets/posts/misc/myGreatEscape.md"
  },
  patience: {
    id: "misc-patience",
    title: UITextMisc.patience,
    subText: "a diary of a trip to Santander, Spain",
    route: LocalRoutesMisc.patience,
    content: "/assets/posts/misc/patience.md"
  },
  scotlandEngland: {
    id: "misc-scotland-vs-england",
    title: UITextMisc.scotlandEngland,
    subText: "ye auld enemies",
    route: LocalRoutesMisc.scotlandEngland,
    content: "/assets/posts/misc/scotlandEngland.md"
  },
  westHamEverton: {
    id: "misc-west-ham-vs-everton",
    title: UITextMisc.westHamEverton,
    subText: "our first trip to the new stadium in Stratford",
    route: LocalRoutesMisc.westHamEverton,
    content: "/assets/posts/misc/westHamEverton.md"
  },
  wind: {
    id: "misc-wind",
    title: UITextMisc.wind,
    subText: "this was written for the last night cabaret at the 2014 Buddhafield family friendly retreat",
    route: LocalRoutesMisc.wind,
    content: "/assets/posts/misc/wind.md"
  },
  worldCupSemi: {
    id: "misc-world-cup-semi",
    title: UITextMisc.worldCupSemi,
    subText: "a trip to a big game in Russia",
    route: LocalRoutesMisc.worldCupSemi,
    content: "/assets/posts/misc/worldCupSemi.md"
  },
}

export const poetrySections = {
  averse: {
    id: "poetry-averse",
    title: UITextPoetry.averse,
    subText: "kids shmids",
    route: LocalRoutesPoetry.averse,
    content: "/assets/posts/poetry/averse.md"
  },
  balls: {
    id: "poetry-balls",
    title: UITextPoetry.balls,
    subText: "golfing expectations",
    route: LocalRoutesPoetry.balls,
    content: "/assets/posts/poetry/ballsShmalls.md"
  },
  bandsBoycottBarclays: {
    id: "poetry-bands",
    title: UITextPoetry.bandsBoycottBarclays,
    subText: "the Great Escape 2024",
    route: LocalRoutesPoetry.bandsBoycottBarclays,
    content: "/assets/posts/poetry/bandsBoycottBarclays.md"
  },
  brighton: {
    id: "poetry-brighton",
    title: UITextPoetry.brighton,
    subText: "right on",
    route: LocalRoutesPoetry.brighton,
    content: "/assets/posts/poetry/brighton.md"
  },
  difficult: {
    id: "poetry-difficult",
    title: UITextPoetry.difficult,
    subText: "inspired by David Shrigley",
    route: LocalRoutesPoetry.difficult,
    content: "/assets/posts/poetry/difficult.md"
  },
  dreamland: {
    id: "poetry-dreamland",
    title: UITextPoetry.dreamland,
    subText: "what would a divine spirit make of modern England?",
    route: LocalRoutesPoetry.dreamland,
    content: "/assets/posts/poetry/dreamland.md"
  },
  eton: {
    id: "poetry-eton",
    title: UITextPoetry.eton,
    subText: "old Eton, your time is done",
    route: LocalRoutesPoetry.eton,
    content: "/assets/posts/poetry/oldEton.md"
  },
  goldenBrown: {
    id: "poetry-golden-brown",
    title: UITextPoetry.goldenBrown,
    subText: "I was suffering from a cold and felt a bit sorry for myself",
    route: LocalRoutesPoetry.goldenBrown,
    content: "/assets/posts/poetry/goldenBrown.md"
  },
  gregorian: {
    id: "poetry-gregorian",
    title: UITextPoetry.gregorian,
    subText: "as January dragged on and on...",
    route: LocalRoutesPoetry.gregorian,
    content: "/assets/posts/poetry/gregorian.md"
  },
  if: {
    id: "poetry-if",
    title: UITextPoetry.if,
    subText: "if you can rant and rave when all about you...",
    route: LocalRoutesPoetry.if,
    content: "/assets/posts/poetry/if.md"
  },
  iKneel: {
    id: "poetry-i-kneel",
    title: UITextPoetry.iKneel,
    subText: "black lives matter",
    route: LocalRoutesPoetry.iKneel,
    content: "/assets/posts/poetry/iKneel.md"
  },
  ironies: {
    id: "poetry-ironies",
    title: UITextPoetry.ironies,
    subText: "all the different ironies of '22",
    route: LocalRoutesPoetry.ironies,
    content: "/assets/posts/poetry/ironies.md"
  },
  kane: {
    id: "poetry-kane",
    title: UITextPoetry.kane,
    subText: "that ****ing penalty",
    route: LocalRoutesPoetry.kane,
    content: "/assets/posts/poetry/kane.md"
  },
  lamb: {
    id: "poetry-lamb",
    title: UITextPoetry.lamb,
    subText: "Mary's Lamb",
    route: LocalRoutesPoetry.lamb,
    content: "/assets/posts/poetry/lamb.md"
  },
  love: {
    id: "poetry-love",
    title: UITextPoetry.love,
    subText: "a romantic rhyme",
    route: LocalRoutesPoetry.love,
    content: "/assets/posts/poetry/love.md"
  },
  magic: {
    id: "poetry-magic",
    title: UITextPoetry.magic,
    subText: "socks, pants, food",
    route: LocalRoutesPoetry.magic,
    content: "/assets/posts/poetry/magic.md"
  },
  meaning: {
    id: "poetry-meaning",
    title: UITextPoetry.meaning,
    subText: "don't never do nothing",
    route: LocalRoutesPoetry.meaning,
    content: "/assets/posts/poetry/meaning.md"
  },
  milkAfterIvor: {
    id: "poetry-milk-after-ivor",
    title: UITextPoetry.milkAfterIvor,
    subText: "family holiday in Corrageen, Ireland",
    route: LocalRoutesPoetry.milkAfterIvor,
    content: "/assets/posts/poetry/milkAfterIvor.md"
  },
  moles: {
    id: "poetry-moles",
    title: UITextPoetry.moles,
    subText: "Small Hard Things",
    route: LocalRoutesPoetry.moles,
    content: "/assets/posts/poetry/moles.md"
  },
  monkey: {
    id: "poetry-monkey",
    title: UITextPoetry.monkey,
    subText: "I wish you were home",
    route: LocalRoutesPoetry.monkey,
    content: "/assets/posts/poetry/monkey.md"
  },
  notChristmas: {
    id: "poetry-not-christmas",
    title: UITextPoetry.notChristmas,
    subText: "missing my children",
    route: LocalRoutesPoetry.notChristmas,
    content: "/assets/posts/poetry/notChristmas.md"
  },
  nuts: {
    id: "poetry-nuts",
    title: UITextPoetry.nuts,
    subText: "learn from a kern",
    route: LocalRoutesPoetry.nuts,
    content: "/assets/posts/poetry/nuts.md"
  },
  orgreave: {
    id: "poetry-orgreave",
    title: UITextPoetry.orgreave,
    subText: "an awful day of the miners strike",
    route: LocalRoutesPoetry.orgreave,
    content: "/assets/posts/poetry/orgreave.md"
  },
  pointless: {
    id: "poetry-pointless",
    title: UITextPoetry.pointless,
    subText: "hopefully so",
    route: LocalRoutesPoetry.pointless,
    content: "/assets/posts/poetry/pointless.md"
  },
  prudictive: {
    id: "poetry-prudictive",
    title: UITextPoetry.prudictive,
    subText: "keyboard nanny",
    route: LocalRoutesPoetry.prudictive,
    content: "/assets/posts/poetry/prudictive.md"
  },
  santaClaus: {
    id: "poetry-santa-claus",
    title: UITextPoetry.santaClaus,
    subText: "male?",
    route: LocalRoutesPoetry.santaClaus,
    content: "/assets/posts/poetry/santaClaus.md"
  },
  seaGlass: {
    id: "poetry-sea-glass",
    title: UITextPoetry.seaGlass,
    subText: "Sea Glass from Southwick",
    route: LocalRoutesPoetry.seaGlass,
    content: "/assets/posts/poetry/seaGlass.md"
  },
  soonToBe73: {
    id: "poetry-soon-to-be-73",
    title: UITextPoetry.soonToBe73,
    subText: "the dismantling of the NHS",
    route: LocalRoutesPoetry.soonToBe73,
    content: "/assets/posts/poetry/soonToBe73.md"
  },
  soup: {
    id: "poetry-soup",
    title: UITextPoetry.soup,
    subText: "the machinations of carrot soup",
    route: LocalRoutesPoetry.soup,
    content: "/assets/posts/poetry/soup.md"
  },
  thankless: {
    id: "poetry-thankless",
    title: UITextPoetry.thankless,
    subText: "value in thankless (any) tasks...",
    route: LocalRoutesPoetry.thankless,
    content: "/assets/posts/poetry/thankless.md"
  },
  theRoad: {
    id: "poetry-the-road",
    title: UITextPoetry.theRoad,
    subText: "they felled the wood to build the road...",
    route: LocalRoutesPoetry.theRoad,
    content: "/assets/posts/poetry/theRoad.md"
  },
  winter: {
    id: "poetry-winter",
    title: UITextPoetry.winter,
    subText: "when the rain never stops to fall",
    route: LocalRoutesPoetry.winter,
    content: "/assets/posts/poetry/winter.md"
  },
}

export const songsSections = {
  collegeCampus: {
    id: "songs-college-campus",
    title: UITextSongs.collegeCampus,
    subText: "about a girl that I didn't really meet on the college campus",
    route: LocalRoutesSongs.collegeCampus,
    content: "/assets/posts/songs/collegeCampus.md"
  },
  doWhatIWant: {
    id: "songs-do-what-i-want",
    title: UITextSongs.doWhatIWant,
    subText: "written on a trip to Ireland",
    route: LocalRoutesSongs.doWhatIWant,
    content: "/assets/posts/songs/doWhatIWant.md"
  },
  echoChamber: {
    id: "songs-echo-chamber",
    title: UITextSongs.echoChamber,
    subText: "social media",
    route: LocalRoutesSongs.echoChamber,
    content: "/assets/posts/songs/echoChamber.md"
  },
  if: {
    id: "songs-if",
    title: UITextSongs.if,
    subText: "the qualities that appear necessary for leadership",
    route: LocalRoutesSongs.if,
    content: "/assets/posts/songs/if.md"
  },
  iRememberWhen: {
    id: "songs-i-remember-when",
    title: UITextSongs.iRememberWhen,
    subText: "watching my daughters grow up",
    route: LocalRoutesSongs.iRememberWhen,
    content: "/assets/posts/songs/iRememberWhen.md"
  },
  onTheStreet: {
    id: "songs-on-the-street",
    title: UITextSongs.onTheStreet,
    subText: "about the many homeless in England",
    route: LocalRoutesSongs.onTheStreet,
    content: "/assets/posts/songs/onTheStreet.md"
  },
  whatsWrongWithNow: {
    id: "songs-whats-wrong-with-now",
    title: UITextSongs.whatsWrongWithNow,
    subText: "there's probably quite a lot wrong with now",
    route: LocalRoutesSongs.whatsWrongWithNow,
    content: "/assets/posts/songs/whatsWrongWithNow.md"
  },
}

export const storiesSections = {
  change: {
    id: "stories-change",
    title: UITextStories.change,
    subText: "a campfire story for the Brighton Buddhist Centre's 2013 family retreat",
    route: LocalRoutesStories.change,
    content: "/assets/posts/stories/change.md"
  },
  frederick: {
    id: "stories-frederick",
    title: UITextStories.frederick,
    subText: "created by my eldest daughter on a London Underground train in the autumn of 2012. We had just been to watch West Ham beat Southampton, and we were on our way back to Brighton",
    route: LocalRoutesStories.frederick,
    content: "/assets/posts/stories/frederick.md"
  },
  freedom: {
    id: "stories-freedom",
    title: UITextStories.freedom,
    subText: "a campfire story for the Brighton Buddhist Centre's 2015 family retreat",
    route: LocalRoutesStories.freedom,
    content: "/assets/posts/stories/freedom.md"
  },
  gratitude: {
    id: "stories-gratitude",
    title: UITextStories.gratitude,
    subText: "a campfire story for the Brighton Buddhist Centre's 2014 family retreat",
    route: LocalRoutesStories.gratitude,
    content: "/assets/posts/stories/gratitude.md"
  },
  minusculus: {
    id: "stories-minusculus",
    title: UITextStories.minusculus,
    subText: "Mrs Nay's Story",
    route: LocalRoutesStories.minusculus,
    content: "/assets/posts/stories/minusculus.md"
  },
  theDruid: {
    id: "stories-the-druid",
    title: UITextStories.theDruid,
    subText: "a candlelight story told at a sleepover",
    route: LocalRoutesStories.theDruid,
    content: "/assets/posts/stories/theDruid.md"
  },
  theEarthAndTheMoon: {
    id: "stories-the-earth-and-the-moon",
    title: UITextStories.theEarthAndTheMoon,
    subText: "a campfire story for the Brighton Buddhist Centre's 2016 family retreat",
    route: LocalRoutesStories.theEarthAndTheMoon,
    content: "/assets/posts/stories/theEarthAndTheMoon.md"
  },
  theHopeOfGods: {
    id: "stories-the-hope-of-gods",
    title: UITextStories.theHopeOfGods,
    subText: "the wars that rage over a child's health",
    route: LocalRoutesStories.theHopeOfGods,
    content: "/assets/posts/stories/theHopeOfGods.md"
  },
  theKnucker: {
    id: "stories-the-knucker",
    title: UITextStories.theKnucker,
    subText: "a campfire story for the Brighton Buddhist Centre's 2017 family retreat",
    route: LocalRoutesStories.theKnucker,
    content: "/assets/posts/stories/theKnucker.md"
  },
  theMillwright: {
    id: "stories-the-millwright",
    title: UITextStories.theMillwright,
    subText: "a candlelight story told once the lights had gone out for WWF's 2017 Earth Hour",
    route: LocalRoutesStories.theMillwright,
    content: "/assets/posts/stories/theMillwright.md"
  }
}

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
    sections: blogSections
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

