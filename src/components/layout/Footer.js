import { useState, useEffect } from 'react';

import { UIText } from '../../config'

export const Footer = () => {
  const [darkTheme, setDarkTheme] = useState(true)

  const root = document.documentElement;
  const themeKey = 'theme'

  useEffect(() => {
    const thisTheme = window.localStorage.getItem(themeKey) || 
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    root.setAttribute('data-theme', thisTheme);
    const isDark = thisTheme === 'dark' ? true : false;  
    setDarkTheme(isDark);  
  }, [root])

  return (
    <footer>
      <button
        className="theme-toggle"
        onClick={() => {
          const isDark = !darkTheme
          const theme = isDark ? 'dark' : 'light'        
          root.setAttribute('data-theme', theme);
          setDarkTheme(isDark)
          window.localStorage.setItem(themeKey, theme)
        }}
      >
        {UIText.darkModeToggle}
      </button>
    </footer>
  );
}
