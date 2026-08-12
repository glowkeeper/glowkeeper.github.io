import type { SiteSection, Site } from '@/app/types'

export enum AboutSections {
  about
}

export enum AcademiaSections {
  academia
}

export enum SoftwareSections {
  games,
  apps
}

export enum WritingSections {
  books,
  poetry,
  stories,
  flashFiction,
  reports,
  humour
}

export enum MusicSections {
  songs
}

export const aboutSections: SiteSection = {
  title: 'about',
  path: '/about',
  content: {
    contact: {
      id: "about-contact",
      title: "contact",
      subText: "How to get in touch with Dr Steve Huckle by email.",
      endPoint: 'contact',
      content: 'about/contact.md'
    },
    cv: {
      id: "about-cv",
      title: "cv",
      subText: "Dr Steve Huckle's academic, teaching and technology experience.",
      endPoint: 'cv',
      content: 'about/cv.md'
    },
    legal: {
      id: "about-legal",
      title: "legal",
      subText: "Copyright, privacy and other legal information for huckle.studio.",
      endPoint: 'legal',
      content: 'about/legal.md'
    }
  }
}

export const academiaSections: SiteSection = {
  title: 'works',
  path: '/academia',
  content: {
    teaching: {
      id: "academia-teaching",
      title: "teaching",
      subText: "University teaching, curriculum design and software development bootcamps.",
      endPoint: 'teaching',
      content: 'academia/teaching.md'
    },
    msc: {
      id: "academia-msc",
      title: "msc",
      subText: "Postgraduate work exploring sustainability, energy, the built environment and public policy.",
      endPoint: 'msc',
      content: 'academia/msc.md'
    },
    phd: {
      id: "academia-phd",
      title: "phd",
      subText: "Doctoral research into blockchain, decentralisation and the Internet of Things.",
      endPoint: 'phd',
      content: 'academia/phd.md'
    },
    publications: {
      id: "academia-publications",
      title: "publications",
      subText: "Peer-reviewed research, independent media and conference work on blockchain and decentralised systems.",
      endPoint: 'publications',
      content: 'academia/publications.md'
    },
    talks: {
      id: "academia-talks",
      title: "talks",
      subText: "Selected lectures, conference talks and public speaking engagements.",
      endPoint: 'talks',
      content: 'academia/talks.md'
    }
  }
}

export const appsSections: SiteSection = {
  title: 'apps',
  path: '/software/apps',
  content: {
    animated: {
      id: "software-apps-animated",
      title: "animated",
      subText: "A playful browser animation that lets Dr Huckle run and jump.",
      endPoint: 'animated',
      content: 'software/apps/animated.md'
    },
    calculator: {
      id: "software-apps-calculator",
      title: "calculator",
      subText: "A compact calculator demonstrating reverse Polish notation in the browser.",
      endPoint: 'calculator',
      content: 'software/apps/calculator.md'
    },
    rectangles: {
      id: "software-apps-rectangles",
      title: "rectangles",
      subText: "An interactive aid for exploring Exercism's rectangle-counting problem.",
      endPoint: 'rectangles',
      content: 'software/apps/rectangles.md'
    },
  }
}
  
export const gamesSections: SiteSection = {
  title: 'games',
  path: '/software/games',
  content: {
    quizmo: {
      id: "software-games",
      title: "quizmo",
      subText: "A fast-paced general-knowledge quiz played against the clock.",
      endPoint: 'quizmo',
      content: 'software/games/quizmo.md'
    }
  }
}

export const booksSections: SiteSection = {
  title: 'books',
  path: '/writing/books',
  content: {
    onSlenderStrings: {
      id: "writing-books-on-slender-strings",
      title: "on slender strings",
      subText: "A father's story of love, fear and a childhood brain tumour.",
      endPoint: 'on-slender-strings',
      content: 'writing/books/on-slender-strings/master.md'
    },
    whenTheFireBurnsLow: {
      id: "writing-books-when-the-fire-burns-low",
      title: "when the fire burns low",
      subText: "Tales of magic, mischief and unexpected wisdom.",
      endPoint: 'when-the-fire-burns-low',
      content: 'writing/books/when-the-fire-burns-low/master.md'
    }
  }
}

export const flashFictionSections: SiteSection = {
  title: 'flash fiction',
  path: '/writing/flash-fiction',
  content: {
    eric: {
      id: "flash-eric",
      title: "eric",
      subText: "A playful piece of flash fiction about identity, assumptions and an absent tree.",
      endPoint: 'eric',
      content: 'writing/flashFiction/eric.md'
    },
    fortunes: {
      id: "flash-fortunes",
      title: "fortunes always hiding",
      subText: "A shortlisted flash-fiction tribute to football, the FA Cup and the hope it inspires.",
      endPoint: 'fortunes',
      content: 'writing/flashFiction/fortunesAlwaysHiding.md'
    },
    wisdom: {
      id: "flash-wisdom",
      title: "wisdom",
      subText: "A brief tale about humility and the moments when wisdom must yield.",
      endPoint: 'wisdom',
      content: 'writing/flashFiction/wisdom.md'
    }
  }
}

export const humourSections: SiteSection = {
  title: 'humour',
  path: '/writing/humour',
  content: {
    jokes: {
      id: "humnour-jokes",
      title: "jokes",
      subText: "A growing collection of Dr Huckle's occasional jokes and comic observations.",
      endPoint: 'jokes',
      content: 'writing/humour/jokes.md'
    },
    wind: {
      id: "humour-wind",
      title: "wind",
      subText: "A comic piece written for the 2014 Buddhafield Family Friendly Retreat cabaret.",
      endPoint: 'wind',
      content: 'writing/humour/wind.md'
    },
  }
}

export const reportsSections: SiteSection = {
  title: 'reports',
  path: '/writing/reports',
  content: {
    anotherGreatEscape: {
      id: "reports-another-great-escape",
      title: "another great escape",
      subText: "Three lively days of discovery, music and festival wandering at The Great Escape 2018.",
      endPoint: 'another-great-escape',
      content: 'writing/reports/anotherGreatEscape.md'
    },
    championsOfEurope: {
      id: "reports-champions-of-europe",
      title: "champions of europe",
      subText: "A supporter’s journey to Prague as West Ham win the Europa Conference League.",
      endPoint: 'champions-of-europe',
      content: 'writing/reports/championsOfEurope.md'
    },
    declansLingerie: {
      id: "reports-declans-lingerie",
      title: "declan's lingerie",
      subText: "A reflection on Declan Rice, football fandom and the character supporters choose to see.",
      endPoint: 'declans-lingerie',
      content: 'writing/reports/declansLingerie.md'
    },
    myGreatEscape: {
      id: "reports-my-great-escape",
      title: "my great escape",
      subText: "A personal diary of three music-filled days at Brighton's Great Escape Festival 2017.",
      endPoint: 'my-great-escape',
      content: 'writing/reports/myGreatEscape.md'
    },
    patience: {
      id: "reports-patience",
      title: "patience",
      subText: "A family travel diary about patience, surfing and an eventful journey through northern Spain.",
      endPoint: 'patience',
      content: 'writing/reports/patience.md'
    },
    scotlandEngland: {
      id: "reports-scotland-vs-england",
      title: "scotland vs england",
      subText: "A match-day account of football's oldest international rivalry: Scotland against England.",
      endPoint: 'scotland-england',
      content: 'writing/reports/scotlandEngland.md'
    },
    westHamEverton: {
      id: "reports-west-ham-vs-everton",
      title: "west ham vs everton",
      subText: "A family’s first West Ham match at the club's new stadium in Stratford.",
      endPoint: 'west-ham-everton',
      content: 'writing/reports/westHamEverton.md'
    },
    worldCupSemi: {
      id: "reports-world-cup-semi",
      title: "world cup semi",
      subText: "A whirlwind journey to Moscow for England's 2018 World Cup semi-final.",
      endPoint: 'world-cup-semi',
      content: 'writing/reports/worldCupSemi.md'
    },
  }
}

export const poetrySections: SiteSection = {
  title: 'poetry',
  path: '/writing/poetry',
  content: {
    averse: {
      id: "poetry-averse",
      title: "averse",
      subText: "A wry poem about children, parenthood and the things adults tell themselves.",
      endPoint: 'averse',
      content: 'writing/poetry/averse.md'
    },
    balls: {
      id: "poetry-balls",
      title: "balls",
      subText: "A short comic poem about golf, optimism and familiar disappointment.",
      endPoint: 'balls',
      content: 'writing/poetry/ballsShmalls.md'
    },
    bandsBoycottBarclays: {
      id: "poetry-bands",
      title: "bands boycott barclays",
      subText: "A poem responding to artist boycotts and Barclays sponsorship at The Great Escape 2024.",
      endPoint: 'bands-boycott-barclays',
      content: 'writing/poetry/bandsBoycottBarclays.md'
    },
    brighton: {
      id: "poetry-brighton",
      title: "brighton",
      subText: "A compact celebration and gentle interrogation of Brighton's proudly alternative character.",
      endPoint: 'brighton',
      content: 'writing/poetry/brighton.md'
    },
    difficult: {
      id: "poetry-difficult",
      title: "difficult",
      subText: "A deliberately awkward poem inspired by David Shrigley's dry, unsettling humour.",
      endPoint: 'difficult',
      content: 'writing/poetry/difficult.md'
    },
    dreamland: {
      id: "poetry-dreamland",
      title: "dreamland",
      subText: "A spoken-word reflection on what a divine visitor might make of modern England.",
      endPoint: 'dreamland',
      content: 'writing/poetry/dreamland.md'
    },
    eton: {
      id: "poetry-eton",
      title: "eton",
      subText: "A political poem challenging the privilege and influence of old Eton.",
      endPoint: 'eton',
      content: 'writing/poetry/oldEton.md'
    },
    goldenBrown: {
      id: "poetry-golden-brown",
      title: "golden brown",
      subText: "A self-pitying cold turns into a playful meditation on feeling golden brown.",
      endPoint: 'golden-brown',
      content: 'writing/poetry/goldenBrown.md'
    },
    gregorian: {
      id: "poetry-gregorian",
      title: "gregorian",
      subText: "A poem for the long, grey stretch of January and its stubbornly slow calendar.",
      endPoint: 'gregorian',
      content: 'writing/poetry/gregorian.md'
    },
    if: {
      id: "poetry-if",
      title: "if",
      subText: "A satirical reworking of Kipling's If for an age of noisy political leadership.",
      endPoint: 'if',
      content: 'writing/poetry/if.md'
    },
    iKneel: {
      id: "poetry-i-kneel",
      title: "iKneel",
      subText: "A poem of solidarity, reflection and resolve written in support of Black Lives Matter.",
      endPoint: 'i-kneel',
      content: 'writing/poetry/iKneel.md'
    },
    ironies: {
      id: "poetry-ironies",
      title: "ironies",
      subText: "A catalogue of the political and cultural ironies that defined 2022.",
      endPoint: 'ironies',
      content: 'writing/poetry/ironies.md'
    },
    kane: {
      id: "poetry-kane",
      title: "kane",
      subText: "A raw football poem about Harry Kane, pressure and one unforgettable penalty.",
      endPoint: 'kane',
      content: 'writing/poetry/kane.md'
    },
    lamb: {
      id: "poetry-lamb",
      title: "lamb",
      subText: "A playful reimagining of Mary, her lamb and the story we think we know.",
      endPoint: 'lamb',
      content: 'writing/poetry/lamb.md'
    },
    love: {
      id: "poetry-love",
      title: "love",
      subText: "A warm, concise rhyme about the ordinary and extraordinary work of love.",
      endPoint: 'love',
      content: 'writing/poetry/love.md'
    },
    magic: {
      id: "poetry-magic",
      title: "magic",
      subText: "A domestic poem finding a little magic among socks, pants and everyday food.",
      endPoint: 'magic',
      content: 'writing/poetry/magic.md'
    },
    meaning: {
      id: "poetry-meaning",
      title: "meaning",
      subText: "A playful poem about double negatives, action and the slippery search for meaning.",
      endPoint: 'meaning',
      content: 'writing/poetry/meaning.md'
    },
    milkAfterIvor: {
      id: "poetry-milk-after-ivor",
      title: "milk after ivor",
      subText: "A family-holiday poem shaped by Corrageen, Ireland and time spent after Ivor.",
      endPoint: 'milk-after-ivor',
      content: 'writing/poetry/milkAfterIvor.md'
    },
    moles: {
      id: "poetry-moles",
      title: "moles",
      subText: "A poem about moles, small hard things and what lies beneath the surface.",
      endPoint: 'moles',
      content: 'writing/poetry/moles.md'
    },
    monkey: {
      id: "poetry-monkey",
      title: "monkey",
      subText: "A tender poem about distance, longing and wishing someone safely home.",
      endPoint: 'monkey',
      content: 'writing/poetry/monkey.md'
    },
    notChristmas: {
      id: "poetry-not-christmas",
      title: "not christmas",
      subText: "A winter poem about separation, parenthood and a Christmas that does not feel like Christmas.",
      endPoint: 'not-christmas',
      content: 'writing/poetry/notChristmas.md'
    },
    nuts: {
      id: "poetry-nuts",
      title: "nuts",
      subText: "A playful rhyme about kernels, growth and the lessons hidden inside small things.",
      endPoint: 'nuts',
      content: 'writing/poetry/nuts.md'
    },
    orgreave: {
      id: "poetry-orgreave",
      title: "orgreave",
      subText: "A poem confronting the violence and lasting injustice of the Battle of Orgreave.",
      endPoint: 'orgreave',
      content: 'writing/poetry/orgreave.md'
    },
    pointless: {
      id: "poetry-pointless",
      title: "pointless",
      subText: "A knowingly slight poem about pointlessness and the hope that it might matter.",
      endPoint: 'pointless',
      content: 'writing/poetry/pointless.md'
    },
    prudictive: {
      id: "poetry-prudictive",
      title: "prudictive",
      subText: "A comic complaint about autocorrect, predictive text and the keyboard's unwanted help.",
      endPoint: 'prudictive',
      content: 'writing/poetry/prudictive.md'
    },
    santaClaus: {
      id: "poetry-santa-claus",
      title: "santa claus",
      subText: "A playful seasonal poem questioning Santa Claus, gender and inherited assumptions.",
      endPoint: 'santa-claus',
      content: 'writing/poetry/santaClaus.md'
    },
    seaGlass: {
      id: "poetry-sea-glass",
      title: "sea glass",
      subText: "A reflective poem inspired by pieces of sea glass found along Southwick beach.",
      endPoint: 'sea-glass',
      content: 'writing/poetry/seaGlass.md'
    },
    soonToBe73: {
      id: "poetry-soon-to-be-73",
      title: "soon to be 73",
      subText: "A political poem about ageing, public care and the dismantling of the NHS.",
      endPoint: 'soon-to-be-73',
      content: 'writing/poetry/soonToBe73.md'
    },
    soup: {
      id: "poetry-soup",
      title: "soup",
      subText: "A comic domestic poem following the surprisingly involved creation of carrot soup.",
      endPoint: 'soup',
      content: 'writing/poetry/soup.md'
    },
    thankless: {
      id: "poetry-thankless",
      title: "thankless",
      subText: "A poem about care, unnoticed effort and the value hidden inside thankless tasks.",
      endPoint: 'thankless',
      content: 'writing/poetry/thankless.md'
    },
    theRoad: {
      id: "poetry-the-road",
      title: "the road",
      subText: "A poem about progress, loss and the wood felled to make way for a road.",
      endPoint: 'the-road',
      content: 'writing/poetry/theRoad.md'
    },
    winter: {
      id: "poetry-winter",
      title: "winter",
      subText: "A rain-soaked winter poem about endurance, greyness and waiting for the weather to turn.",
      endPoint: 'winter',
      content: 'writing/poetry/winter.md'
    },
  }
}

export const songsSections: SiteSection = {
  title: 'songs',
  path: '/songs',
  content: {
    collegeCampus: {
      id: "songs-college-campus",
      title: "college campus",
      subText: "An original song about a girl imagined—but never quite met—on a college campus.",
      endPoint: 'college-campus',
      content: 'songs/collegeCampus.md'
    },
    doWhatIWant: {
      id: "songs-do-what-i-want",
      title: "do what i want",
      subText: "A spirited family-band song written during a trip to Corrageen, Ireland.",
      endPoint: 'do-what-i-want',
      content: 'songs/doWhatIWant.md'
    },
    echoChamber: {
      id: "songs-echo-chamber",
      title: "echo chamber",
      subText: "An original song about social media, certainty and life inside an echo chamber.",
      endPoint: 'echo-chamber',
      content: 'songs/echoChamber.md'
    },
    if: {
      id: "songs-if",
      title: "if",
      subText: "A satirical song about the troubling qualities modern leadership seems to reward.",
      endPoint: 'if',
      content: 'songs/if.md'
    },
    iRememberWhen: {
      id: "songs-i-remember-when",
      title: "i remember when",
      subText: "A reflective song about memory, parenthood and watching two daughters grow up.",
      endPoint: 'i-remember-when',
      content: 'songs/iRememberWhen.md'
    },
    onTheStreet: {
      id: "songs-on-the-street",
      title: "on the street",
      subText: "An original song reflecting on homelessness and the people living on England's streets.",
      endPoint: 'on-the-street',
      content: 'songs/onTheStreet.md'
    },
    whatsWrongWithNow: {
      id: "songs-whats-wrong-with-now",
      title: "whats wrong with now",
      subText: "A restless original song asking what is wrong with now—and what might still be changed.",
      endPoint: 'whats-wrong-with-now',
      content: 'songs/whatsWrongWithNow.md'
    },
  }
}

export const storiesSections: SiteSection = {
  title: 'stories',
  path: '/writing/stories',
  content: {
    change: {
      id: "stories-change",
      title: "change",
      subText: "A campfire story about Old Man Harry, travel and transformation, written for a family retreat.",
      endPoint: 'change',
      content: 'writing/stories/change.md'
    },
    frederick: {
      id: "stories-frederick",
      title: "frederick",
      subText: "A story imagined with Dr Huckle's eldest daughter on a train home from a West Ham match.",
      endPoint: 'frederick',
      content: 'writing/stories/frederick.md'
    },
    freedom: {
      id: "stories-freedom",
      title: "freedom",
      subText: "A long-form campfire story about captivity, courage and the difficult pursuit of freedom.",
      endPoint: 'freedom',
      content: 'writing/stories/freedom.md'
    },
    gratitude: {
      id: "stories-gratitude",
      title: "gratitude",
      subText: "A gentle campfire story about generosity, wonder and learning to recognise gratitude.",
      endPoint: 'gratitude',
      content: 'writing/stories/gratitude.md'
    },
    minusculus: {
      id: "stories-minusculus",
      title: "minusculus",
      subText: "Mrs Nay's curious story of Minusculus, a very small character facing a much larger world.",
      endPoint: 'minusculus',
      content: 'writing/stories/minusculus.md'
    },
    theDruid: {
      id: "stories-the-druid",
      title: "the druid",
      subText: "A candlelit sleepover story about an ancient druid and the mystery gathering around him.",
      endPoint: 'the-druid',
      content: 'writing/stories/theDruid.md'
    },
    theEarthAndTheMoon: {
      id: "stories-the-earth-and-the-moon",
      title: "the earth and the moon",
      subText: "A family-retreat story about the Earth, the Moon and the bonds that hold worlds together.",
      endPoint: 'the-earth-and-the-moon',
      content: 'writing/stories/theEarthAndTheMoon.md'
    },
    theHopeOfGods: {
      id: "stories-the-hope-of-gods",
      title: "the hope of gods",
      subText: "A story about belief, conflict and the wars that gather around a child's fragile health.",
      endPoint: 'the-hope-of-gods',
      content: 'writing/stories/theHopeOfGods.md'
    },
    theKnucker: {
      id: "stories-the-knucker",
      title: "the knucker",
      subText: "A Sussex campfire tale about a fearsome knucker, local folklore and an unfortunate meal.",
      endPoint: 'the-knucker',
      content: 'writing/stories/theKnucker.md'
    },
    theMillwright: {
      id: "stories-the-millwright",
      title: "the mill wright",
      subText: "A candlelight tale of a millwright, told during WWF's 2017 Earth Hour.",
      endPoint: 'the-millwright',
      content: 'writing/stories/theMillwright.md'
    }
  }
}

export const siteSections: Site = {
  about: {
    title: "about",
    subText: "Computing educator, curriculum designer, software developer and restless creative.",
    siteSections: [aboutSections]
  },
  academia: {
    eyebrow: "Teaching · Curriculum · Research",
    title: "Ideas made teachable",
    subText: "Current teaching, curriculum design and research across computing, data and technology.",
    siteSections: [academiaSections]
  },
  software: {
    eyebrow: "Developer · Maker",
    title: "Software with a point of view",
    subText: "Games, useful tools and browser experiments—including the daily challenge Quizmo.",
    siteSections: [gamesSections, appsSections]
  },
  writing: {
    eyebrow: "Poetry · Fiction · Non-fiction",
    title: "Words in several directions",
    subText: "Political and personal poetry, short fiction, humour, football reports and longer-form work.",
    siteSections: [booksSections, poetrySections, storiesSections, flashFictionSections, reportsSections, humourSections]
  },
  music:  {
    eyebrow: "Songs · Home recordings",
    title: "Loud ideas, played acoustically",
    subText: "Punk-acoustic songs about politics, frustration, friendship and the world as it is.",
    siteSections: [songsSections]
  }
}
