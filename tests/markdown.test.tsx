import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'

import { Page } from '@/app/components/Page'

describe('Markdown rendering', () => {
  it('renders article content into static HTML', async () => {
    const markdown = await readFile(
      path.join(process.cwd(), 'src/content/about/contact.md'),
      'utf8'
    )
    const html = renderToStaticMarkup(<Page content={markdown} />)

    expect(html).toContain('<article class="article">')
    expect(html).toContain('<h1>Contact</h1>')
    expect(html).toContain('href="mailto:steve@huckle.studio"')
  })
})
