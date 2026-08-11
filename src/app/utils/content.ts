import { siteSections } from '@/app/config'

import type {
  Content,
  SiteContent,
  Site as TopLevel,
} from '@/app/store/types'

type ContentRoute = {
  route: string
  item: Content
}

const contentRoutes: ContentRoute[] = Object.keys(siteSections as TopLevel).flatMap(section =>
  siteSections[section].siteSections.flatMap(subSection =>
    Object.values(subSection.content).map(item => ({
      route: `${subSection.path}/${item.endPoint}`,
      item,
    }))
  )
)

let contentPromise: Promise<SiteContent> | undefined

export const loadContent = (): Promise<SiteContent> => {
  if (!contentPromise) {
    contentPromise = Promise.all(
      contentRoutes.map(async ({ route, item }) => {
        const response = await fetch(item.content)

        if (!response.ok) {
          throw new Error(`Unable to load content from ${item.content}`)
        }

        return [route, {
          id: item.id,
          title: item.title,
          subText: item.subText,
          content: await response.text(),
        }] as const
      })
    ).then(entries => Object.fromEntries(entries) as SiteContent)
      .catch(error => {
        contentPromise = undefined
        throw error
      })
  }

  return contentPromise
}
