import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthContext';
import { Link, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthButton from '../auth/AuthButton';
import Layout from '../Layout';
import Menu from '../menu/Menu';
import MenuIcon from '../menu/MenuIcon';
import ProfileOptions from './ProfileOptions';
import SearchBar from '../SearchBar';
import ThemeToggle from '../ThemeToggle';

const Nav = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <Layout>
        <nav className="relative flex justify-center items-center w-full py-5 text-xl border-b-[1px] border-black ">
          <div className="flex items-center gap-2 absolute left-0">
            <MenuIcon menu={menu} setMenu={setMenu} />
            <Link
              to="shop/categories"
              className="hidden lg:block uppercase text-base"
            >
              shop
            </Link>
          </div>
          <Link to="/home">
            <h1 className="flex justify-center uppercase text-xl lg:text-3xl">
              avant
            </h1>
          </Link>
          <div className="absolute right-0 flex items-center gap-2 lg:gap-3">
            <SearchBar searchBar={searchBar} />
            <ThemeToggle />
            <AiOutlineSearch
              onClick={() => setSearchBar(!searchBar)}
              className="cursor-pointer"
            />
            <Link to="cart">
              <AiOutlineShoppingCart />
            </Link>
            <AuthButton profile={profile} setProfile={setProfile} />
            <ProfileOptions profile={profile} setProfile={setProfile} />
          </div>
        </nav>
      </Layout>
      <Outlet />
      <Menu menu={menu} setMenu={setMenu} isLoggedIn={loggedIn} />
    </>
  );
};

export default Nav;
