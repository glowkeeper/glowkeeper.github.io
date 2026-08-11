export const themeScript = `
  (() => {
    let saved;
    try {
      saved = localStorage.getItem('huckle-theme');
    } catch {}

    let prefersDark = false;
    try {
      prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {}

    const theme = saved === 'light' || saved === 'dark'
      ? saved
      : prefersDark ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
  })();
`
