import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = ({ searchBar }) => {
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search/${userInput}`);
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
          searchBar ? 'w-44 md:w-full' : 'w-0'
        } border-b border-black bg-transparent dark:border-white text-base placeholder:text-black placeholder:dark:text-white outline-none float-right transition-all duration-500`}
      />
    </form>
  );
};

export default SearchBar;
