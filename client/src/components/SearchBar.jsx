import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = ({ searchBar }) => {
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`search/results/${userInput}`);
    setUserInput('');
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <input
        onChange={e => {
          setUserInput(e.target.value);
        }}
        value={userInput}
        placeholder="Search"
        type="text"
        className={`${
          searchBar ? 'w-48 md:w-full' : 'w-0'
        } relative z-50 md:left-4 bg-white border-b border-black bg-transparent dark:bg-black dark:border-white text-base placeholder:text-black placeholder:dark:text-white outline-none float-right transition-all duration-500`}
      />
    </form>
  );
};

export default SearchBar;
