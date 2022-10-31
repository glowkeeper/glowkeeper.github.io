import React, { useState, useEffect } from "react";

import { Header } from './layout/Header'
import { Router } from './Router'
import { Footer } from './layout/Footer'

import { System } from '../config'

let themeContext = {
  theme: System.lightTheme,
  setTheme: () => {},
}

export const ThemeContext = React.createContext(themeContext);

export const App = () => {
  const [title, setTitle] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [thisTheme, setThisTheme] = useState(System.lightTheme)

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(System.themeKey, theme)
    themeContext.theme = theme
    setThisTheme(theme)
  }

  themeContext = {
    theme: thisTheme,
    setTheme: setTheme,
  }

  useEffect(() => {
    const thisTheme = window.localStorage.getItem(System.themeKey) || 
      window.matchMedia(`(prefers-color-scheme: ${System.darkTheme})`).matches ? System.darkTheme : System.lightTheme;
    document.documentElement.setAttribute('data-theme', thisTheme);
    window.localStorage.setItem(System.themeKey, thisTheme)
    themeContext.theme = thisTheme
    setThisTheme(thisTheme)
  }, [])
  
  return (
    <ThemeContext.Provider value={themeContext}>
      <div id="content">
        <Header 
          title={title}
          setTitle={setTitle}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <main>
          <Router            
            setTitle={setTitle} 
            setIsMenuOpen={setIsMenuOpen}
          />
        </main>
        <Footer setTitle={setTitle}/>
      </div>
    </ThemeContext.Provider>
  );
}
