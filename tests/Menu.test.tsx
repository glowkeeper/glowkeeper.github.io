// @vitest-environment jsdom

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Menu } from '@/app/components/Menu'

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode
    href: string
  }) => <a href={href} {...props}>{children}</a>,
}))

describe('mobile menu accessibility', () => {
  beforeEach(() => {
    document.body.style.overflow = ''
  })

  it('keeps the closed drawer inert, then focuses it when opened', async () => {
    const user = userEvent.setup()
    render(<Menu />)

    const trigger = screen.getByRole('button', { name: 'Open menu' })
    const drawer = document.querySelector('#mobile-navigation')

    expect(drawer?.hasAttribute('inert')).toBe(true)
    expect(drawer?.getAttribute('aria-hidden')).toBe('true')

    await user.click(trigger)

    expect(drawer?.hasAttribute('inert')).toBe(false)
    expect(drawer?.getAttribute('aria-hidden')).toBe('false')
    await waitFor(() => expect(document.activeElement).toBe(screen.getAllByRole('button', { name: 'Close menu' })[1]))
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('contains keyboard focus and restores it when Escape closes the drawer', async () => {
    const user = userEvent.setup()
    render(<Menu />)

    const trigger = screen.getByRole('button', { name: 'Open menu' })
    await user.click(trigger)

    const drawer = document.querySelector<HTMLElement>('#mobile-navigation')
    const focusable = drawer?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    if (!focusable?.length) throw new Error('Expected focusable drawer controls')

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    last.focus()
    await user.tab()
    expect(document.activeElement).toBe(first)

    first.focus()
    await user.tab({ shift: true })
    expect(document.activeElement).toBe(last)

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(document.activeElement).toBe(trigger)
    expect(drawer?.hasAttribute('inert')).toBe(true)
  })
})
