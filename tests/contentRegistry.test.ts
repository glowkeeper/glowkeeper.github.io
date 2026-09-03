import { describe, expect, it } from 'vitest'

import {
  appsSections,
  booksSections,
  flashFictionSections,
  gamesSections,
  humourSections,
  poetrySections,
  reportsSections,
  siteSections,
  SoftwareSections,
  storiesSections,
  WritingSections,
} from '@/app/config'
import { allowedDrafts, validateContentRegistry } from '@/app/utils/contentRegistry'

describe('content registry', () => {
  it('has unique routes and IDs, existing sources, and no unexpected Markdown', async () => {
    await expect(validateContentRegistry()).resolves.toBeUndefined()
  })

  it('has no draft exemptions', () => {
    expect(allowedDrafts).toEqual(new Set())
  })

  it('keeps reordered landing sections mapped to their route groups', () => {
    expect(siteSections.software.siteSections[SoftwareSections.games]).toBe(gamesSections)
    expect(siteSections.software.siteSections[SoftwareSections.apps]).toBe(appsSections)

    expect(siteSections.writing.siteSections[WritingSections.poetry]).toBe(poetrySections)
    expect(siteSections.writing.siteSections[WritingSections.stories]).toBe(storiesSections)
    expect(siteSections.writing.siteSections[WritingSections.flashFiction]).toBe(flashFictionSections)
    expect(siteSections.writing.siteSections[WritingSections.reports]).toBe(reportsSections)
    expect(siteSections.writing.siteSections[WritingSections.books]).toBe(booksSections)
    expect(siteSections.writing.siteSections[WritingSections.humour]).toBe(humourSections)
  })
})
