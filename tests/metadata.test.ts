import { describe, expect, it } from 'vitest'

import { poetrySections } from '@/app/config'
import { createContentMetadataGenerator, createPageMetadata } from '@/app/utils/metadata'

describe('page metadata', () => {
  it('creates matching canonical and social URLs', () => {
    const metadata = createPageMetadata({
      title: 'Poetry',
      description: 'Poetry by Dr Steve Huckle.',
      path: '/writing/poetry',
    })

    expect(metadata.alternates?.canonical).toBe('/writing/poetry')
    expect(metadata.openGraph?.url).toBe('/writing/poetry')
    expect(metadata.openGraph?.title).toBe('Poetry | Dr Steve Huckle')
    expect(metadata.openGraph?.images).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: '/social/writing/poetry.jpg' }),
    ]))
    expect(metadata.twitter?.title).toBe('Poetry | Dr Steve Huckle')
  })

  it('generates article metadata from its registered route', async () => {
    const generateMetadata = createContentMetadataGenerator(poetrySections)
    const metadata = await generateMetadata({ params: Promise.resolve({ path: 'winter' }) })

    expect(metadata.title).toBe('Winter')
    expect(metadata.description).toBe('A rain-soaked winter poem about endurance, greyness and waiting for the weather to turn.')
    expect(metadata.alternates?.canonical).toBe('/writing/poetry/winter')
    expect(metadata.openGraph?.url).toBe('/writing/poetry/winter')
    expect(metadata.twitter?.images).toEqual(['/social/writing/poetry/winter.jpg'])
  })
})
