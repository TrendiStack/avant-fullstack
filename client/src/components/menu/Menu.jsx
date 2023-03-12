import { AuthContext } from '../../context/AuthContext';
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useEffect } from 'react';

const Menu = ({ menu, setMenu, isAuthenticated }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setMenu(false);
    logout();
    navigate('/home/sign-in');
  };

  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') {
        setMenu(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    if (menu) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [setMenu, menu]);

  useEffect(() => {
    const menu = document.getElementById('menu');

    Array.from(document.getElementsByClassName('menu-item')).forEach(
      (item, index) => {
        item.onmouseover = () => {
          menu.dataset.activeIndex = index;
        };
      }
    );
  }, []);

  return (
    <div
      className={`${
        menu ? 'left-[0%]' : 'left-[100%]'
      } fixed h-screen w-screen top-0 bg-white dark:bg-black transition-all duration-700 z-40`}
    >
      <div id="menu">
        <ul id="menu-items" className="uppercase">
          <li onClick={() => setMenu(false)} className="menu-item">
            <Link to="/home">Home</Link>
          </li>
          <li onClick={() => setMenu(false)} className="menu-item">
            <Link to="/home/Account">Account</Link>
          </li>

          <li onClick={() => setMenu(false)} className="menu-item">
            <Link to="/home/shop/categories">Shop</Link>
          </li>
          {isAuthenticated ? (
            <li onClick={handleLogout} className="menu-item cursor-pointer">
              Sign out
            </li>
          ) : (
            <li onClick={() => setMenu(false)} className="menu-item">
              <Link to="/home/sign-up">Join</Link>
            </li>
          )}

          <li className="flex justify-between text-white text-2xl mx-1">
            <BsInstagram className="cursor-pointer " />
            <BsTwitter className="cursor-pointer" />
            <BsFacebook className="cursor-pointer" />
            <FaTiktok className="cursor-pointer" />
          </li>
        </ul>
        <div id="menu-background-pattern"></div>
        <div id="menu-background-image"></div>
      </div>
    </div>
  );
};

export default Menu;
