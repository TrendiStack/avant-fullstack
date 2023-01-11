import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const ProfileOptions = ({ profile, setProfile }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <div
      className={`${
        profile ? 'top-10' : '-top-48'
      } absolute right-0 bg-white text-black dark:bg-black dark:text-white w-32 z-40 px-4 pb-4 transition-colors duration-700`}
    >
      <ul className="text-base grid grid-cols-1 gap-1 ">
        {isAuthenticated ? (
          <>
            <li>
              <Link to="profile" onClick={() => setProfile(!profile)}>
                Account
              </Link>
            </li>
            <li>
              <Link to="" onClick={() => setProfile(!profile)}>
                Orders
              </Link>
            </li>
            <li>
              <Link to="" onClick={() => setProfile(!profile)}>
                Wishlist
              </Link>
            </li>

            <li>
              <Link to="" onClick={() => setProfile(!profile)}>
                Settings
              </Link>
            </li>
          </>
        ) : (
          <li></li>
        )}

        <li>
          <Link
            to={isAuthenticated ? '/home/sign-in' : '/home/sign-in'}
            onClick={() => {
              isAuthenticated && logout();
              setProfile(!profile);
            }}
          >
            {isAuthenticated ? 'Sign Out' : 'Sign In'}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileOptions;
