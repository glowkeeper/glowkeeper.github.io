// @vitest-environment jsdom

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { ThemeToggle } from '@/app/components/ThemeToggle'
import { themeScript } from '@/app/utils/theme'

describe('theme storage hardening', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    delete document.documentElement.dataset.theme
  })

  it('initialises a usable theme when storage and matchMedia are unavailable', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('Storage blocked')
    })

    expect(() => Function(themeScript)()).not.toThrow()
    expect(document.documentElement.dataset.theme).toBe('light')
  })

  it('still changes theme when persisting the preference fails', async () => {
    const user = userEvent.setup()
    document.documentElement.dataset.theme = 'dark'
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('Storage blocked')
    })

    render(<ThemeToggle />)
    const toggle = await screen.findByRole('button', { name: 'Switch to light theme' })
    await user.click(toggle)

    expect(document.documentElement.dataset.theme).toBe('light')
    await waitFor(() => expect(toggle.getAttribute('aria-label')).toBe('Switch to dark theme'))
  })
})
