import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const ThemeToggle = () => {
  const { darkMode, switchTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={switchTheme}
      className="hidden md:block cursor-pointer relative "
    >
      <p
        className={`${
          darkMode ? '-translate-y-1/2 ' : 'translate-y-1/2 top-6 opacity-0'
        } absolute right-0 transition-all duration-500 text-sm font-semibold text-white`}
      >
        Light
      </p>

      <p
        className={`${
          !darkMode ? '-translate-y-1/2' : 'translate-y-1/2 top-6 opacity-0'
        } absolute right-0 transition-all duration-500 text-sm font-semibold text-black`}
      >
        Dark
      </p>
    </div>
  );
};

export default ThemeToggle;
