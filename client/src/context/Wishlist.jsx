import { AuthContext } from './AuthContext';
import { createContext, useContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const WishlistContext = createContext({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  clearWishlist: () => {},
  isInWishlist: () => {},
});

const WishlistProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('jwt');
  const email = user?.email;
  const [wishlist, setWishlist] = useState([]);

  const isInWishlist = product =>
    wishlist?.find(item => item?.id === product?.id);

  const addToWishlist = async product => {
    if (!token) {
      return { error: 'You must be logged in to add to wishlist' };
    }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/wishlist/add`,

        {
          product,
          email,
        },
        {
          headers: { 'auth-token': token },
        }
      );
      const updatedWishlist = data.user.wishlist;
      setWishlist(updatedWishlist);
      alert('Added to Wishlist');
    } catch (err) {
      console.error(
        'Error while updating user. Error: ',
        err.response.data.msg
      );

      alert(err.response.data.msg);
    }
  };

  const removeFromWishlist = async product => {
    if (!token) {
      return { error: 'You must be logged in to remove from wishlist' };
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/wishlist/remove`,
        {
          product,
          email,
        },
        {
          headers: { 'auth-token': token },
        }
      );
      const updatedWishlist = data.user.wishlist;
      setWishlist(updatedWishlist);
      alert('Removed from Wishlist');
    } catch (err) {
      console.error(
        'Error while updating user. Error: ',
        err.response.data.msg
      );
    }
  };

  const clearWishlist = async () => {
    if (!token) {
      return { error: 'You must be logged in to clear wishlist' };
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/wishlist/clear`,
        {
          email,
        },
        {
          headers: { 'auth-token': token },
        }
      );
      const updatedWishlist = data.user.wishlist;
      setWishlist(updatedWishlist);
      alert('Wishlist Cleared');
    } catch (err) {
      console.error(
        'Error while updating user. Error: ',
        err.response.data.msg
      );
    }
  };

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!token) {
        return;
      }
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/wishlist`,
          {
            headers: { 'auth-token': token, 'user-email': email },
          }
        );
        const wishlist = data.user.wishlist;
        setWishlist(wishlist);
      } catch (err) {
        console.error(
          'Error while updating user. Error: ',
          err.response.data.msg
        );
      }
    };
    fetchWishlist();
  }, [email, token]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
