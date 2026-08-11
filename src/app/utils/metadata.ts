import type { Metadata } from 'next'

import type { SiteSection } from '@/app/types'

const siteName = 'Dr Steve Huckle'
const socialImage = {
  url: '/og.jpg',
  width: 1731,
  height: 909,
  alt: 'Dr Steve Huckle — Where code, creativity and curiosity meet.',
}

type PageMetadata = {
  description: string
  path: string
  title: string
}

const displayTitle = (title: string): string => {
  const exactTitles: Record<string, string> = {
    cv: 'CV',
    msc: 'MSc',
    phd: 'PhD',
    iKneel: 'iKneel',
  }

  return exactTitles[title] ?? `${title.charAt(0).toUpperCase()}${title.slice(1)}`
}

export const createPageMetadata = ({ description, path, title }: PageMetadata): Metadata => {
  const formattedTitle = displayTitle(title)
  const socialTitle = `${formattedTitle} | ${siteName}`

  return {
    title: formattedTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      type: 'website',
      url: path,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [socialImage.url],
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
