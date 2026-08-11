import { describe, expect, it } from 'vitest'

import { allowedDrafts, validateContentRegistry } from '@/app/utils/contentRegistry'

describe('content registry', () => {
  it('has unique routes and IDs, existing sources, and no unexpected Markdown', async () => {
    await expect(validateContentRegistry()).resolves.toBeUndefined()
  })

  it('documents the intentional millwright review draft', () => {
    expect(allowedDrafts).toEqual(new Set(['writing/stories/millwrightReview.md']))
  })
})
