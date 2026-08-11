'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const currentTheme: Theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : theme
    const nextTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    try {
      localStorage.setItem('huckle-theme', nextTheme)
    } catch {}
    setTheme(nextTheme)
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      aria-pressed={theme === 'dark'}
      onClick={toggleTheme}
    >
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
      <span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}
