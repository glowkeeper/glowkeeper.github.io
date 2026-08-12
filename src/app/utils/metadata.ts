import type { Metadata } from 'next'

import type { SiteSection } from '@/app/types'

const siteName = 'Dr Steve Huckle'

type PageMetadata = {
  description: string
  imagePath?: string
  keywords?: string[]
  openGraphType?: 'article' | 'website'
  path: string
  title: string
}

export const displayTitle = (title: string): string => {
  const exactTitles: Record<string, string> = {
    cv: 'CV',
    msc: 'MSc',
    phd: 'PhD',
    iKneel: 'iKneel',
  }

  return exactTitles[title] ?? `${title.charAt(0).toUpperCase()}${title.slice(1)}`
}

export const socialImagePath = (path: string): string =>
  path === '/' ? '/social/home.jpg' : `/social${path}.jpg`

export const createPageMetadata = ({ description, imagePath, keywords, openGraphType = 'website', path, title }: PageMetadata): Metadata => {
  const formattedTitle = displayTitle(title)
  const socialTitle = `${formattedTitle} | ${siteName}`
  const resolvedImagePath = imagePath ?? socialImagePath(path)
  const socialImage = {
    url: resolvedImagePath,
    width: 1200,
    height: 630,
    alt: `${formattedTitle} — ${siteName}`,
  }

  return {
    title: formattedTitle,
    description,
    authors: [{ name: 'Dr Steve Huckle', url: '/' }],
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      type: openGraphType,
      url: path,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [resolvedImagePath],
    },
  }
}

export const createContentMetadataGenerator = (section: SiteSection) => async ({
  params,
}: {
  params: Promise<{ path: string }>
}): Promise<Metadata> => {
  const { path } = await params
  const item = Object.values(section.content).find(content => content.endPoint === path)

  if (!item) return {}

  return createPageMetadata({
    title: item.title,
    description: item.subText,
    path: `${section.path}/${item.endPoint}`,
  })
}
