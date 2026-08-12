import type { MetadataRoute } from 'next'

import { siteSections } from '@/app/config'
import { allBookParams } from '@/app/utils/bookRegistry'

const baseUrl = 'https://huckle.studio'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sectionRoutes = Object.values(siteSections).flatMap(section => {
    const rootPath = `/${section.siteSections[0].path.split('/').filter(Boolean)[0]}`
    return [
    rootPath,
    ...section.siteSections.flatMap(subSection => [
      subSection.path,
      ...Object.values(subSection.content).map(item => `${subSection.path}/${item.endPoint}`),
    ]),
  ]})
  const bookRoutes = (await allBookParams()).map(({ chapter, path }) => (
    `/writing/books/${path}/${chapter.join('/')}`
  ))

  return [...new Set(['/', ...sectionRoutes, ...bookRoutes])].map(route => ({
    url: `${baseUrl}${route === '/' ? '' : route}`,
    changeFrequency: route.startsWith('/writing/books/on-slender-strings') ? 'yearly' : 'monthly',
    priority: route === '/writing/books/on-slender-strings' ? 0.9 : route === '/' ? 1 : 0.7,
  }))
}
