export type Content = {
  id: string
  title: string
  subText: string
  endPoint: string
  content: string
}

export type SiteSection = {
  title: string
  path: string
  content: Record<string, Content>
}

export type Site = Record<string, {
  eyebrow?: string
  title: string
  subText: string
  siteSections: SiteSection[]
}>
