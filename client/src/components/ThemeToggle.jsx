import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { darkMode, switchTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={switchTheme}
      className="relative flex items-center w-[30px] h-[5px] bg-neutral-300 dark:bg-neutral-300  cursor-pointer rounded-full duration-700 "
    >
      <div
        className={`${
          darkMode ? 'left-[70%]' : 'left-[-10%]'
        } absolute h-5 w-5 duration-300 `}
      >
        {darkMode ? (
          <BsMoonFill className="text-lg text-black dark:text-white relative " />
        ) : (
          <BsFillSunFill className="text-black dark:text-white" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
