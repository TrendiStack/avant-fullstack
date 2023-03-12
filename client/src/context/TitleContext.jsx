import { createContext, useEffect, useState } from 'react';

export const TitleContext = createContext({
  title: '',
  location: '',
  setTitle: () => {},
  setLocation: () => {},
});

const TitleContextProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const titleMap = {
      '/home': 'AVANT | HOME',
      '/home/account': 'ACCOUNT | AVANT',
      '/home/cart': 'CART | AVANT',
      '/home/change-password': 'CHANGE PASSWORD | AVANT',
      '/home/checkout': 'CHECKOUT | AVANT',
      '/home/orders': 'ORDERS | AVANT',
      '/home/product/:id': 'SHOP | AVANT',
      '/home/search/results/:query': 'SEARCH | AVANT',
      '/home/shop/categories': 'SHOP | AVANT',
      '/home/shop/categories/:category': 'SHOP | AVANT',
      '/home/sign-in': 'SIGN IN | AVANT',
      '/home/sign-up': 'SIGN UP | AVANT',
      '/home/verify': 'VERIFY | AVANT',
      '/home/wishlist': 'WISHLIST | AVANT',
    };

    const newTitle = titleMap[location] || 'AVANT | Inspire and Transcend';
    document.title = title ? `${title.toUpperCase()} - ${newTitle}` : newTitle;
  }, [location, title]);
  const value = {
    title,
    location,
    setTitle,
    setLocation,
  };

  return (
    <TitleContext.Provider value={value}>{children}</TitleContext.Provider>
  );
};

export default TitleContextProvider;
