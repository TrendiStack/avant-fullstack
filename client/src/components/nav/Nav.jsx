import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AuthContext } from '../../context/AuthContext';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from 'react';
import { VerificationBanner } from '../VerificationBanner';
import AuthButton from '../auth/AuthButton';
import Layout from '../Layout';
import Menu from '../menu/Menu';
import MenuIcon from '../menu/MenuIcon';
import ProfileOptions from './ProfileOptions';
import SearchBar from '../SearchBar';
import ThemeToggle from '../ThemeToggle';
import TotalItemIcon from './TotalItemIcon';

const Nav = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <VerificationBanner />
      <Layout>
        <nav className="relative flex justify-center items-center w-full py-6 text-xl">
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
          <div className="absolute right-0 flex items-center justify-center gap-2 lg:gap-3">
            <SearchBar searchBar={searchBar} />
            <ThemeToggle />
            <AiOutlineSearch
              onClick={() => setSearchBar(!searchBar)}
              className="cursor-pointer"
            />
            <Link to="cart" className="relative">
              <AiOutlineShoppingCart />
              <TotalItemIcon />
            </Link>
            <AuthButton profile={profile} setProfile={setProfile} />
            <ProfileOptions profile={profile} setProfile={setProfile} />
          </div>
        </nav>
      </Layout>
      <Outlet />
      <Menu menu={menu} setMenu={setMenu} isAuthenticated={isAuthenticated} />
    </>
  );
};

export default Nav;
