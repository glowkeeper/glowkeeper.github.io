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

  it('renders poetry tables as verse rather than data tables', () => {
    const markdown = '# Poem\n\n| |\n|:--|\n| First line |\n| Second line |'
    const html = renderToStaticMarkup(<Page content={markdown} variant="poetry" />)

    expect(html).toContain('<article class="article article--poetry">')
    expect(html).toContain('<div class="verse">')
    expect(html).toContain('<table class="verse-lines">')
    expect(html).not.toContain('table-scroll')
  })

  it('preserves headings and spacing hooks for comparison poems', () => {
    const markdown = '# Poem\n\n**Mine**|**Original**\n:--|:--\nMy line | Their line'
    const html = renderToStaticMarkup(<Page content={markdown} variant="poetry" />)

    expect(html).toContain('aria-label="Side-by-side poem comparison"')
    expect(html).toContain('article article--poetry article--comparison')
    expect(html).toContain('class="verse verse--comparison"')
    expect(html).toContain('<table class="verse-lines verse-lines--comparison">')
    expect(html).toContain('<strong>Mine</strong>')
    expect(html).toContain('<strong>Original</strong>')
  })
})
