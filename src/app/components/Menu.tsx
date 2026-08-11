'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteSections } from '@/app/config'

const primaryRoutes: Record<string, string> = {
  about: '/about',
  academia: '/academia',
  software: '/software',
  writing: '/writing',
  music: '/songs',
}

const primaryLabels: Record<string, string> = {
  about: 'About',
  academia: 'Academia',
  software: 'Software',
  writing: 'Writing',
  music: 'Music',
}

export const Menu = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)

  const sections = useMemo(() => Object.entries(siteSections).map(([key, config]) => ({
    key,
    label: primaryLabels[key],
    route: primaryRoutes[key],
    groups: config.siteSections,
  })), [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsOpen(false)
        triggerRef.current?.focus()
      }

      if (event.key === 'Tab') {
        const focusable = mobileNavRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )

        if (!focusable?.length) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const closeMenu = (restoreFocus = true) => {
    setIsOpen(false)
    setExpanded(null)
    if (restoreFocus) triggerRef.current?.focus()
  }

  const isCurrent = (route: string) => pathname === route || pathname.startsWith(`${route}/`)

  return (
    <>
      <nav className="desktop-navigation" aria-label="Primary navigation">
        {sections.map(section => (
          <Link
            key={section.key}
            className={isCurrent(section.route) ? 'current' : ''}
            href={section.route}
            aria-current={isCurrent(section.route) ? 'page' : undefined}
          >
            {section.label}
          </Link>
        ))}
      </nav>

      <button
        ref={triggerRef}
        className="menu-trigger"
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(true)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <button
        className={`menu-backdrop ${isOpen ? 'open' : ''}`}
        type="button"
        aria-label="Close menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={() => closeMenu()}
      />

      <nav
        ref={mobileNavRef}
        id="mobile-navigation"
        className={`mobile-navigation ${isOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="mobile-navigation-header">
          <span>Explore</span>
          <button ref={closeRef} type="button" aria-label="Close menu" onClick={() => closeMenu()}>×</button>
        </div>

        <Link className="mobile-home-link" href="/" onClick={() => closeMenu()}>Home</Link>

        <div className="mobile-navigation-sections">
          {sections.map(section => {
            const isExpanded = expanded === section.key
            return (
              <section key={section.key} className="mobile-navigation-section">
                <div className="mobile-navigation-row">
                  <Link
                    className={isCurrent(section.route) ? 'current' : ''}
                    href={section.route}
                    onClick={() => closeMenu()}
                  >
                    {section.label}
                  </Link>
                  <button
                    type="button"
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${section.label}`}
                    aria-expanded={isExpanded}
                    onClick={() => setExpanded(isExpanded ? null : section.key)}
                  >
                    <span aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                  </button>
                </div>

                {isExpanded && (
                  <div className="mobile-navigation-details">
                    {section.groups.map(group => (
                      <div key={group.path}>
                        {section.groups.length > 1 && <p>{group.title}</p>}
                        <div>
                          {Object.values(group.content).map(item => (
                            <Link key={item.id} href={`${group.path}/${item.endPoint}`} onClick={() => closeMenu()}>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )
          })}
        </div>
      </nav>
    </>
  )
}
