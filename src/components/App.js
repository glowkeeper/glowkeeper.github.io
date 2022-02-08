import React, { useState, useEffect } from "react";

import { Router } from './Router'

import { System } from '../config'

let themeContext = {
  theme: System.lightTheme,
  setTheme: () => {},
}

export const ThemeContext = React.createContext(themeContext);

export const App = () => {
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
        <Router />
      </div>
    </ThemeContext.Provider>
  );
}
