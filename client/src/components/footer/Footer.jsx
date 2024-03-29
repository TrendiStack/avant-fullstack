import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import FooterHeader from './FooterHeader';
import Layout from '../Layout';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Footer = ({ notFound }) => {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {location.pathname === '/home/cart' ? null : location.pathname ===
        '/' ? null : notFound === true ? null : (
        <footer className={`sticky top-[100%] mt-10`}>
          <img
            src="https://images.unsplash.com/photo-1513654586071-d094bb329095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="banner"
            className="h-[15rem] lg:h-[25rem] w-full object-cover grayscale"
          />
          <Layout className="flex flex-col lg:flex-row gap-3 lg:gap-10 lg:mb-2 py-5 lg:py-12 ">
            {/* Account */}
            <div>
              <FooterHeader name="Account" />
              <ul>
                <li>
                  <Link to={`/home/${isAuthenticated ? 'account' : 'sign-in'}`}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/home">Forgot Password</Link>
                </li>
                <li>
                  <Link to="/home/sign-in">Login</Link>
                </li>
                <li>
                  <Link to="/home/sign-up">Register</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <FooterHeader name="Company" />
              <ul>
                {/* <li>
                  <Link to="/home">About</Link>
                </li>
                <li>
                  <Link to="/home">Contact</Link>
                </li>
                <li>
                  <Link to="/home">Privacy Policy</Link>
                </li> */}
                <li>
                  <Link to="/home/terms">Terms of Service</Link>
                </li>
              </ul>
            </div>

            {/* HELP */}
            {/* <div>
              <FooterHeader name="Help" />
              <ul>
                <li>
                  <Link to="/home">Shipping</Link>
                </li>
                <li>
                  <Link to="/home">Returns</Link>
                </li>
                <li>
                  <Link to="/home">FAQs</Link>
                </li>
              </ul>
            </div> */}

            {/* FOLLOW US */}
            <div className="flex flex-col gap-2">
              <FooterHeader name="Follow Us" />
              <li className="flex gap-5 text-base">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok />
                </a>
              </li>
            </div>

            {/* NEWSLETTER */}
            <div className="lg:w-2/6">
              <FooterHeader name="Newsletter" />
              <p className="text-sm">
                Subscribe to our newsletter to receive updates on new arrivals,
                special offers and other discount information.
              </p>
            </div>

            {/* LOGO */}
            <FooterHeader
              logo
              name="AVANT"
              className="hidden lg:block lg:ml-auto"
            />
          </Layout>

          <div className="bg-black py-4 text-xs sm:text-sm">
            <Layout className="flex justify-between text-white">
              <p>
                © 2023 <span className="font-semibold">AVANT</span>, All Rights
                Reserved. Designed by{' '}
                <a
                  href="https://www.linkedin.com/in/terel-phillips/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terel Phillips
                </a>
              </p>
              <p>
                <Link to="/home/terms">
                  Privacy & Cookies | Terms of Service
                </Link>
              </p>
            </Layout>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
