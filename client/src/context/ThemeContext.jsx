import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  darkMode: undefined,
  switchTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(undefined);
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  const switchTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', 'true');
      window.document.body.classList.add('dark');
    } else if (darkMode === false) {
      localStorage.setItem('darkMode', 'false');
      window.document.body.classList.remove('dark');
    } else {
      setDarkMode(isDarkMode);
      isDarkMode && window.document.body.classList.add('dark');
    }
  }, [darkMode, isDarkMode]);

  const value = {
    darkMode,
    switchTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
