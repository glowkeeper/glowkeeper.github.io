import { useState } from 'react';

export const Footer = () => {
  const [lightTheme, setLightTheme] = useState(true)

  const root = document.documentElement;

  return (
    <footer>
      <button
        onClick={() => {
          const isLight = !lightTheme
          const theme = isLight ? 'light' : 'dark'          
          root.setAttribute('data-theme', theme);
          setLightTheme(isLight)
        }}
      >Toggle Dark Mode</button>
    </footer>
  );
}
