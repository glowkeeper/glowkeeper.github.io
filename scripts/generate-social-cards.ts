import { mkdir, rm } from 'node:fs/promises'
import path from 'node:path'

import sharp from 'sharp'

import { siteSections } from '../src/app/config'
import { displayTitle, socialImagePath } from '../src/app/utils/metadata'

type ArtKey = 'about' | 'academia' | 'software' | 'writing' | 'music'

type SocialCard = {
  art: ArtKey
  description: string
  label: string
  path: string
  title: string
}

const staticCards: SocialCard[] = [
  {
    art: 'about',
    label: 'Huckle.studio',
    path: '/',
    title: 'Where code, creativity and curiosity meet.',
    description: 'Writing, research, teaching and independent projects by Dr Steve Huckle.',
  },
  { art: 'about', label: 'About', path: '/about', title: siteSections.about.title, description: siteSections.about.subText },
  { art: 'academia', label: 'Academia', path: '/academia', title: siteSections.academia.title, description: siteSections.academia.subText },
  { art: 'software', label: 'Software', path: '/software', title: siteSections.software.title, description: siteSections.software.subText },
  { art: 'software', label: 'Software', path: '/software/apps', title: 'fun', description: 'Playful utilities and browser experiments built by Dr Steve Huckle.' },
  { art: 'software', label: 'Software', path: '/software/games', title: 'games', description: 'Small, playful browser games built by Dr Steve Huckle.' },
  { art: 'writing', label: 'Writing', path: '/writing', title: siteSections.writing.title, description: siteSections.writing.subText },
  { art: 'writing', label: 'Writing', path: '/writing/books', title: 'books', description: 'Books and longer-form writing by Dr Steve Huckle.' },
  { art: 'writing', label: 'Writing', path: '/writing/flash-fiction', title: 'flash fiction', description: 'Compact stories and flash fiction by Dr Steve Huckle.' },
  { art: 'writing', label: 'Writing', path: '/writing/humour', title: 'humour', description: 'Comic writing, jokes and playful observations by Dr Steve Huckle.' },
  { art: 'writing', label: 'Writing', path: '/writing/poetry', title: 'poetry', description: 'Poetry about family, politics, place and the peculiarities of ordinary life.' },
  { art: 'writing', label: 'Writing', path: '/writing/reports', title: 'reports', description: 'Personal reports from music, travel, football and life beyond the desk.' },
  { art: 'writing', label: 'Writing', path: '/writing/stories', title: 'stories', description: 'Original stories written for campfires, candlelight and quiet reading.' },
  { art: 'music', label: 'Music', path: '/songs', title: siteSections.music.title, description: siteSections.music.subText },
]

const contentCards: SocialCard[] = Object.entries(siteSections).flatMap(([sectionKey, section]) =>
  section.siteSections.flatMap(subSection =>
    Object.values(subSection.content).map(item => ({
      art: sectionKey as ArtKey,
      label: section.siteSections.length > 1
        ? `${displayTitle(sectionKey)} · ${displayTitle(subSection.title)}`
        : displayTitle(sectionKey),
      path: `${subSection.path}/${item.endPoint}`,
      title: item.title,
      description: item.subText,
    }))
  )
)

const escapeXml = (value: string): string => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

const wrapText = (value: string, limit: number, maximumLines: number): string[] => {
  const words = value.split(/\s+/)
  const lines: string[] = []

  for (const word of words) {
    const current = lines.at(-1)
    if (!current || current.length + word.length + 1 > limit) {
      if (lines.length === maximumLines) {
        lines[maximumLines - 1] = `${lines[maximumLines - 1].replace(/[.,;:!?]?$/, '')}…`
        break
      }
      lines.push(word)
    } else {
      lines[lines.length - 1] = `${current} ${word}`
    }
  }

  return lines
}

const accents: Record<ArtKey, string> = {
  about: '#d88a68',
  academia: '#73aaa5',
  software: '#70b4ad',
  writing: '#d88978',
  music: '#d39a5f',
}

const overlay = (card: SocialCard): Buffer => {
  const titleLines = wrapText(displayTitle(card.title), 25, 3)
  const descriptionLines = wrapText(card.description, 54, 3)
  const titleStart = 178
  const descriptionStart = titleStart + titleLines.length * 72 + 36
  const title = titleLines.map((line, index) =>
    `<tspan x="72" y="${titleStart + index * 72}">${escapeXml(line)}</tspan>`
  ).join('')
  const description = descriptionLines.map((line, index) =>
    `<tspan x="74" y="${descriptionStart + index * 31}">${escapeXml(line)}</tspan>`
  ).join('')

  return Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" x2="1">
          <stop offset="0" stop-color="#120e17" stop-opacity="0.38" />
          <stop offset="0.6" stop-color="#120e17" stop-opacity="0.12" />
          <stop offset="1" stop-color="#120e17" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#shade)" />
      <rect x="72" y="72" width="52" height="5" rx="2.5" fill="${accents[card.art]}" />
      <text x="72" y="113" fill="#e6d6c8" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="3">${escapeXml(card.label.toUpperCase())}</text>
      <text fill="#fff8ef" font-family="Georgia, serif" font-size="62" font-weight="700">${title}</text>
      <text fill="#e9ddd2" font-family="Arial, sans-serif" font-size="24" font-weight="400">${description}</text>
      <text x="74" y="575" fill="#c7b7ab" font-family="Arial, sans-serif" font-size="18" letter-spacing="1.5">DR STEVE HUCKLE  ·  HUCKLE.STUDIO</text>
    </svg>
  `)
}

const outputDirectory = path.join(process.cwd(), 'public', 'social')

const generateCard = async (card: SocialCard): Promise<void> => {
  const source = path.join(process.cwd(), 'src', 'social-art', `${card.art}.png`)
  const output = path.join(process.cwd(), 'public', socialImagePath(card.path))

  await mkdir(path.dirname(output), { recursive: true })
  await sharp(source)
    .resize(1200, 630, { fit: 'cover' })
    .composite([{ input: overlay(card) }])
    .jpeg({ quality: 88, progressive: true, chromaSubsampling: '4:4:4' })
    .toFile(output)
}

const main = async () => {
  await rm(outputDirectory, { recursive: true, force: true })
  const cards = [...staticCards, ...contentCards]
  await Promise.all(cards.map(generateCard))
  console.log(`Generated ${cards.length} page-specific social cards.`)
}

void main()
