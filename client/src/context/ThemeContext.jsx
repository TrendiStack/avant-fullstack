import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  darkMode: undefined,
  switchTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const systemThemeDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [darkMode, setDarkMode] = useState(
    systemThemeDark
      ? localStorage.getItem('darkMode') !== 'false'
      : localStorage.getItem('darkMode') === 'true'
  );

  const switchTheme = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', 'true');
      window.document.body.classList.add('dark');
    } else {
      localStorage.setItem('darkMode', 'false');
      window.document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const value = {
    darkMode,
    switchTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
// if (darkMode) {
//   localStorage.setItem('darkMode', 'true');
//   window.document.body.classList.add('dark');
// } else if (darkMode === false) {
//   localStorage.setItem('darkMode', 'false');
//   window.document.body.classList.remove('dark');
// } else {
//   setDarkMode(isDarkMode);
//   isDarkMode && window.document.body.classList.add('dark');
// }
