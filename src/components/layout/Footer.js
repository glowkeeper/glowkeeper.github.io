import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { UIText, UITextAbout } from '../../config'

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
      <div
        id="footer"
      >
        <div id="footer-content">
          <div>
            <Link 
                className="footer"
                to="/about/contact"
            >
              {UITextAbout.contact}
            </Link> <br/>  
            <Link 
                className="footer"
                to="/about/cv"
            >
              {UITextAbout.cv}
            </Link>   <br/>              
            <Link 
                className="footer"
                to="/about/info"
            >
              {UITextAbout.info}
            </Link>   
          </div>
          <p>
            {UIText.copyright}
          </p>
          <button
            id="theme-toggle"
            onClick={() => {
              const isDark = !darkTheme
              const theme = isDark ? 'dark' : 'light'       
              root.setAttribute('data-theme', theme);
              setDarkTheme(isDark)
              window.localStorage.setItem(themeKey, theme)
            }}
          >
            {darkTheme ? UIText.lightMode : UIText.darkMode }
          </button>
        </div>
      </div>
    </footer>
  );
}
