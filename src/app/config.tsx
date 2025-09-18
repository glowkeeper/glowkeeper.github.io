import type { SiteSection, Site } from '@/app/store/types'

export enum SoftwareSections {
  apps,
  games
}

export enum WritingSections {
  books, 
  flashFiction,
  humour,
  poetry,
  reports,
  stories
}

export const aboutSections: SiteSection = {
  title: 'about',
  content: {
    contact: {
      id: "about-contact",
      title: "contact",
      subText: "send an email",
      route: '/about/contact',
      content: '/assets/posts/about/contact.md'
    },
    cv: {
      id: "about-cv",
      title: "cv",
      subText: "the curriculum vitae of Dr Huckle",
      route: '/about/cv',
      content: '/assets/posts/about/cv.md'
    },
    legal: {
      id: "about-legal",
      title: "legal",
      subText: "site legalities",
      route: '/about/legal',
      content: '/assets/posts/about/legal.md'
    }
  }
}

export const academiaSections: SiteSection = {
  title: 'works',
  content: {
    teaching: {
      id: "academia-teaching",
      title: "teaching",
      subText: "info about the stuff Dr Huckle teaches",
      route: '/academia/teaching',
      content: '/assets/posts/academia/teaching.md'
    },
    phd: {
      id: "academia-phd",
      title: "phd",
      subText: "how Dr Huckle got his salutation",
      route: '/academia/phd',
      content: '/assets/posts/academia/phd.md'
    },
    msc: {
      id: "academia-msc",
      title: "msc",
      subText: "eco-conscious postgraduate studies",
      route: '/academia/msc',
      content: '/assets/posts/academia/msc.md'
    },
  }
}

export const appsSections: SiteSection = {
  title: 'apps',
  content: {
    animated: {
      id: "software-apps",
      title: "animated",
      subText: "make dr huckle run and jump",
      route: '/software/apps/animated',
      content: '/assets/posts/software/apps/animated.md'
    },
    calculator: {
      id: "software-apps",
      title: "calculator",
      subText: "a simple reverse-polish calculator",
      route: '/software/apps/calculator',
      content: '/assets/posts/software/apps/calculator.md'
    },
    rectangles: {
      id: "software-apps",
      title: "rectangles",
      subText: "helps solve exercism's rectangles problem",
      route: '/software/apps/rectangles',
      content: '/assets/posts/software/apps/rectangles.md'
    },
    storymaker: {
      id: "software-apps",
      title: "storymaker",
      subText: "ai-based story generation",
      route: '/software/apps/storymaker',
      content: '/assets/posts/software/apps/storymaker.md'
    }
  }
}
  
export const gamesSections: SiteSection = {
  title: 'games',
  content: {
    quizmo: {
      id: "software-games",
      title: "quizmo",
      subText: "a time-based general knowledge quiz",
      route: '/software/games/quizmo',
      content: '/assets/posts/software/games/quizmo.md'
    }
  }
}

export const booksSections: SiteSection = {
  title: 'books',
  content: {
    myAbi: {
      id: "writing-books",
      title: "my abi",
      subText: "a father's story",
      route: '/writing/books/my-abi',
      content: '/assets/posts/writing/books/myAbi.md'
    },
    storiesFromTheCampfire: {
      id: "writing-books",
      title: "stories from the campfire",
      subText: "tales from a family retreat",
      route: '/writing/books/stories-from-the-campfire',
      content: '/assets/posts/writing/books/storiesFromTheCampfire.md'
    }
  }
}

export const flashFictionSections: SiteSection = {
  title: 'flash fiction',
  content: {
    eric: {
      id: "flash-eric",
      title: "eric",
      subText: "it's said that I might be Eric, but I don't live in a tree",
      route: '/writing/flash-fiction/eric',
      content: '/assets/posts/writing/flashFiction/eric.md'
    },
    fortunes: {
      id: "flash-fortunes",
      title: "fortunes always hiding",
      subText: "I entered a version of this story for a Songs of Praise FA Cup Fans Choir Competition. Songs of Praise were looking for three-hundred-word stories that reflected the passion of the FA Cup. The winners would get to sing Abide with Me, backed by a brass band, in front of 90,000 people at the FA Cup Final at Wembley Stadium. The story got shortlisted. Alas, it didn't win",
      route: '/writing/flash-fiction/fortunes',
      content: '/assets/posts/writing/flashFiction/fortunesAlwaysHiding.md'
    },
    wisdom: {
      id: "flash-wisdom",
      title: "wisdom",
      subText: "sometimes even the wise must acknowledge a higher wisdom",
      route: '/writing/flash-fiction/wisdom',
      content: '/assets/posts/writing/flashFiction/wisdom.md'
    }
  }
}

export const humourSections: SiteSection = {
  title: 'humour',
  content: {
    jokes: {
      id: "humnour-jokes",
      title: "jokes",
      subText: "my occasional side-splitters",
      route: '/writing/humour/jokes',
      content: '/assets/posts/writing/humour/jokes.md'
    },
    wind: {
      id: "humour-wind",
      title: "wind",
      subText: "this was written for the last night cabaret at the 2014 buddhafield family friendly retreat",
      route: '/writing/humour/wind',
      content: '/assets/posts/writing/humour/wind.md'
    },
  }
}

export const reportsSections: SiteSection = {
  title: 'reports',
  content: {
    anotherGreatEscape: {
      id: "reports-another-great-escape",
      title: "another great escape",
      subText: "three days of music and fun at brighton's 2018 great escape festival",
      route: '/writing/reports/another-great-escape',
      content: '/assets/posts/writing/reports/anotherGreatEscape.md'
    },
    championsOfEurope: {
      id: "reports-champions-of-europe",
      title: "champions of europe",
      subText: "west ham win the europa conference league",
      route: '/writing/reports/champions-of-europe',
      content: '/assets/posts/writing/reports/championsOfEurope.md'
    },
    declansLingerie: {
      id: "reports-declans-lingerie",
      title: "declan's lingerie",
      subText: "the spirit of declan rice",
      route: '/writing/reports/declans-lingerie',
      content: '/assets/posts/writing/reports/declansLingerie.md'
    },
    myGreatEscape: {
      id: "reports-my-great-escape",
      title: "my great escape",
      subText: "three days of music and fun at Brighton's 2017 Great Escape festival",
      route: '/writing/reports/my-great-escape',
      content: '/assets/posts/writing/reports/myGreatEscape.md'
    },
    patience: {
      id: "reports-patience",
      title: "patience",
      subText: "a diary of a trip to santander, spain",
      route: '/writing/reports/patience',
      content: '/assets/posts/writing/reports/patience.md'
    },
    scotlandEngland: {
      id: "reports-scotland-vs-england",
      title: "scotland vs england",
      subText: "ye auld enemies",
      route: '/writing/reports/scotland-england',
      content: '/assets/posts/writing/reports/scotlandEngland.md'
    },
    westHamEverton: {
      id: "reports-west-ham-vs-everton",
      title: "west ham vs everton",
      subText: "our first trip to the new stadium in Stratford",
      route: '/writing/reports/west-ham-everton',
      content: '/assets/posts/writing/reports/westHamEverton.md'
    },
    worldCupSemi: {
      id: "reports-world-cup-semi",
      title: "world cup semi",
      subText: "a trip to a big game in Russia",
      route: '/writing/reports/world-cup-semi',
      content: '/assets/posts/writing/reports/worldCupSemi.md'
    },
  }
}

export const poetrySections: SiteSection = {
  title: 'poetry',
  content: {
    averse: {
      id: "poetry-averse",
      title: "averse",
      subText: "kids shmids",
      route: '/writing/poetry/averse',
      content: '/assets/posts/writing/poetry/averse.md'
    },
    balls: {
      id: "poetry-balls",
      title: "balls",
      subText: "golfing expectations",
      route: '/writing/poetry/balls',
      content: '/assets/posts/writing/poetry/ballsShmalls.md'
    },
    bandsBoycottBarclays: {
      id: "poetry-bands",
      title: "bands boycott barclays",
      subText: "the great escape 2024",
      route: '/writing/poetry/bands-boycott-barclays',
      content: '/assets/posts/writing/poetry/bandsBoycottBarclays.md'
    },
    brighton: {
      id: "poetry-brighton",
      title: "brighton",
      subText: "right on",
      route: '/writing/poetry/brighton',
      content: '/assets/posts/writing/poetry/brighton.md'
    },
    difficult: {
      id: "poetry-difficult",
      title: "difficult",
      subText: "inspired by david shrigley",
      route: '/writing/poetry/difficult',
      content: '/assets/posts/writing/poetry/difficult.md'
    },
    dreamland: {
      id: "poetry-dreamland",
      title: "dreamland",
      subText: "what would a divine spirit make of modern england?",
      route: '/writing/poetry/dreamland',
      content: '/assets/posts/writing/poetry/dreamland.md'
    },
    eton: {
      id: "poetry-eton",
      title: "eton",
      subText: "old Eton, your time is done",
      route: '/writing/poetry/eton',
      content: '/assets/posts/writing/poetry/oldEton.md'
    },
    goldenBrown: {
      id: "poetry-golden-brown",
      title: "golden brown",
      subText: "suffering from a cold and feeling a bit sorry for myself",
      route: '/writing/poetry/golden-brown',
      content: '/assets/posts/writing/poetry/goldenBrown.md'
    },
    gregorian: {
      id: "poetry-gregorian",
      title: "gregorian",
      subText: "as january dragged on and on...",
      route: '/writing/poetry/gregorian',
      content: '/assets/posts/writing/poetry/gregorian.md'
    },
    if: {
      id: "poetry-if",
      title: "if",
      subText: "if you can rant and rave when all about you...",
      route: '/writing/poetry/if',
      content: '/assets/posts/writing/poetry/if.md'
    },
    iKneel: {
      id: "poetry-i-kneel",
      title: "iKneel",
      subText: "black lives matter",
      route: '/writing/poetry/i-kneel',
      content: '/assets/posts/writing/poetry/iKneel.md'
    },
    ironies: {
      id: "poetry-ironies",
      title: "ironies",
      subText: "all the different ironies of '22",
      route: '/writing/poetry/ironies',
      content: '/assets/posts/writing/poetry/ironies.md'
    },
    kane: {
      id: "poetry-kane",
      title: "kane",
      subText: "that ****ing penalty",
      route: '/writing/poetry/kane',
      content: '/assets/posts/writing/poetry/kane.md'
    },
    lamb: {
      id: "poetry-lamb",
      title: "lamb",
      subText: "Mary's Lamb",
      route: '/writing/poetry/lamb',
      content: '/assets/posts/writing/poetry/lamb.md'
    },
    love: {
      id: "poetry-love",
      title: "love",
      subText: "a romantic rhyme",
      route: '/writing/poetry/love',
      content: '/assets/posts/writing/poetry/love.md'
    },
    magic: {
      id: "poetry-magic",
      title: "magic",
      subText: "socks, pants, food",
      route: '/writing/poetry/magic',
      content: '/assets/posts/writing/poetry/magic.md'
    },
    meaning: {
      id: "poetry-meaning",
      title: "meaning",
      subText: "don't never do nothing",
      route: '/writing/poetry/meaning',
      content: '/assets/posts/writing/poetry/meaning.md'
    },
    milkAfterIvor: {
      id: "poetry-milk-after-ivor",
      title: "milk after ivor",
      subText: "family holiday in corrageen, ireland",
      route: '/writing/poetry/milk-after-ivor',
      content: '/assets/posts/writing/poetry/milkAfterIvor.md'
    },
    moles: {
      id: "poetry-moles",
      title: "moles",
      subText: "Small Hard Things",
      route: '/writing/poetry/moles',
      content: '/assets/posts/writing/poetry/moles.md'
    },
    monkey: {
      id: "poetry-monkey",
      title: "monkey",
      subText: "I wish you were home",
      route: '/writing/poetry/monkey',
      content: '/assets/posts/writing/poetry/monkey.md'
    },
    notChristmas: {
      id: "poetry-not-christmas",
      title: "not christmas",
      subText: "missing my children",
      route: '/writing/poetry/not-christmas',
      content: '/assets/posts/writing/poetry/notChristmas.md'
    },
    nuts: {
      id: "poetry-nuts",
      title: "nuts",
      subText: "learn from a kern",
      route: '/writing/poetry/nuts',
      content: '/assets/posts/writing/poetry/nuts.md'
    },
    orgreave: {
      id: "poetry-orgreave",
      title: "orgreave",
      subText: "an awful day of the miners strike",
      route: '/writing/poetry/orgreave',
      content: '/assets/posts/writing/poetry/orgreave.md'
    },
    pointless: {
      id: "poetry-pointless",
      title: "pointless",
      subText: "hopefully so",
      route: '/writing/poetry/pointless',
      content: '/assets/posts/writing/poetry/pointless.md'
    },
    prudictive: {
      id: "poetry-prudictive",
      title: "prudictive",
      subText: "keyboard nanny",
      route: '/writing/poetry/prudictive',
      content: '/assets/posts/writing/poetry/prudictive.md'
    },
    santaClaus: {
      id: "poetry-santa-claus",
      title: "santa claus",
      subText: "male?",
      route: '/writing/poetry/santa-claus',
      content: '/assets/posts/writing/poetry/santaClaus.md'
    },
    seaGlass: {
      id: "poetry-sea-glass",
      title: "sea glass",
      subText: "sea glass from southwick",
      route: '/writing/poetry/sea-glass',
      content: '/assets/posts/writing/poetry/seaGlass.md'
    },
    soonToBe73: {
      id: "poetry-soon-to-be-73",
      title: "soon to be 73",
      subText: "the dismantling of the nhs",
      route: '/writing/poetry/soon-to-be-73',
      content: '/assets/posts/writing/poetry/soonToBe73.md'
    },
    soup: {
      id: "poetry-soup",
      title: "soup",
      subText: "the machinations of carrot soup",
      route: '/writing/poetry/soup',
      content: '/assets/posts/writing/poetry/soup.md'
    },
    thankless: {
      id: "poetry-thankless",
      title: "thankless",
      subText: "value in thankless (any) tasks...",
      route: '/writing/poetry/thankless',
      content: '/assets/posts/writing/poetry/thankless.md'
    },
    theRoad: {
      id: "poetry-the-road",
      title: "the road",
      subText: "they felled the wood to build the road...",
      route: '/writing/poetry/the-road',
      content: '/assets/posts/writing/poetry/theRoad.md'
    },
    winter: {
      id: "poetry-winter",
      title: "winter",
      subText: "when the rain never stops to fall",
      route: '/writing/poetry/winter',
      content: '/assets/posts/writing/poetry/winter.md'
    },
  }
}

export const songsSections: SiteSection = {
  title: 'songs',
  content: {
    collegeCampus: {
      id: "songs-college-campus",
      title: "college campus",
      subText: "about a girl that I didn't really meet on the college campus",
      route: '/songs/college-campus',
      content: '/assets/posts/songs/collegeCampus.md'
    },
    doWhatIWant: {
      id: "songs-do-what-i-want",
      title: "do what i want",
      subText: "written on a trip to Ireland",
      route: '/songs/do-what-i-want',
      content: '/assets/posts/songs/doWhatIWant.md'
    },
    echoChamber: {
      id: "songs-echo-chamber",
      title: "echo chamber",
      subText: "social media",
      route: '/songs/echo-chamber',
      content: '/assets/posts/songs/echoChamber.md'
    },
    if: {
      id: "songs-if",
      title: "if",
      subText: "the qualities that appear necessary for leadership",
      route: '/songs/if',
      content: '/assets/posts/songs/if.md'
    },
    iRememberWhen: {
      id: "songs-i-remember-when",
      title: "i remember when",
      subText: "watching my daughters grow up",
      route: '/songs/i-remember-when',
      content: '/assets/posts/songs/iRememberWhen.md'
    },
    onTheStreet: {
      id: "songs-on-the-street",
      title: "on the street",
      subText: "about the many homeless in England",
      route: '/songs/on-the-street',
      content: '/assets/posts/songs/onTheStreet.md'
    },
    whatsWrongWithNow: {
      id: "songs-whats-wrong-with-now",
      title: "whats wrong with now",
      subText: "there's probably quite a lot wrong with now",
      route: '/songs/whats-wrong-with-now',
      content: '/assets/posts/songs/whatsWrongWithNow.md'
    },
  }
}

export const storiesSections: SiteSection = {
  title: 'stories',
  content: {
    change: {
      id: "stories-change",
      title: "change",
      subText: "a campfire story for the Brighton Buddhist Centre's 2013 family retreat",
      route: '/writing/stories/change',
      content: '/assets/posts/writing/stories/change.md'
    },
    frederick: {
      id: "stories-frederick",
      title: "frederick",
      subText: "created by my eldest daughter on a London Underground train in the autumn of 2012. We had just been to watch West Ham beat Southampton, and we were on our way back to Brighton",
      route: '/writing/stories/frederick',
      content: '/assets/posts/writing/stories/frederick.md'
    },
    freedom: {
      id: "stories-freedom",
      title: "freedom",
      subText: "a campfire story for the Brighton Buddhist Centre's 2015 family retreat",
      route: '/writing/stories/freedom',
      content: '/assets/posts/writing/stories/freedom.md'
    },
    gratitude: {
      id: "stories-gratitude",
      title: "gratitude",
      subText: "a campfire story for the Brighton Buddhist Centre's 2014 family retreat",
      route: '/writing/stories/gratitude',
      content: '/assets/posts/writing/stories/gratitude.md'
    },
    minusculus: {
      id: "stories-minusculus",
      title: "minusculus",
      subText: "Mrs Nay's Story",
      route: '/writing/stories/minusculus',
      content: '/assets/posts/writing/stories/minusculus.md'
    },
    theDruid: {
      id: "stories-the-druid",
      title: "the druid",
      subText: "a candlelight story told at a sleepover",
      route: '/writing/stories/the-druid',
      content: '/assets/posts/writing/stories/theDruid.md'
    },
    theEarthAndTheMoon: {
      id: "stories-the-earth-and-the-moon",
      title: "the earth and the moon",
      subText: "a campfire story for the Brighton Buddhist Centre's 2016 family retreat",
      route: '/writing/stories/the-earth-and-the-moon',
      content: '/assets/posts/writing/stories/theEarthAndTheMoon.md'
    },
    theHopeOfGods: {
      id: "stories-the-hope-of-gods",
      title: "the hope of gods",
      subText: "the wars that rage over a child's health",
      route: '/writing/stories/the-hope-of-gods',
      content: '/assets/posts/writing/stories/theHopeOfGods.md'
    },
    theKnucker: {
      id: "stories-the-knucker",
      title: "the knucker",
      subText: "a campfire story for the Brighton Buddhist Centre's 2017 family retreat",
      route: '/writing/stories/the-knucker',
      content: '/assets/posts/writing/stories/theKnucker.md'
    },
    theMillwright: {
      id: "stories-the-millwright",
      title: "the mill wright",
      subText: "a candlelight story told once the lights had gone out for WWF's 2017 Earth Hour",
      route: '/writing/stories/the-millwright',
      content: '/assets/posts/writing/stories/theMillwright.md'
    }
  }
}

export const siteSections: Site = {
  about: {
    title: "about dr huckle",
    subText: "more info about dr huckle",
    siteSections: [aboutSections]
  },
  academia: {
    title: "academia",
    subText: "all things academia",
    siteSections: [academiaSections]
  },
  software: {
    title: "built software",
    subText: "all things software",
    siteSections: [appsSections, gamesSections]
  },
  writing: {
    title: "writing",
    subText: "all dr huckle's writing",
    siteSections: [booksSections, flashFictionSections, humourSections, poetrySections, reportsSections, storiesSections]
  },
  music:  {
    title: "music",
    subText: "punk acoustic and other home recordings",
    siteSections: [songsSections]
  }
}
