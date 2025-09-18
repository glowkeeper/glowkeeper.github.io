export type SiteContent = {

  [key: string]: { //route
    id: string
    title: string
    subText: string
    content: string  //markdown
  }
}

export type Content = {
      id: string
      title: string
      subText: string
      route: string
      content: string
}

export type SiteSection = {
  title: string
  content: {
    [key: string]: Content
  } 
}

export type Site = {
  [key: string]: {
    title: string
    subText: string
    siteSections: SiteSection[]
  }
}
