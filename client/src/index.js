import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import MockDataProvider from './context/MockDataContext';
import ThemeContextProvider from './context/ThemeContext';
import './index.css';
import ScrollToTop from './components/ScrollToTop';
import CartProvider from './context/CartContext';
import WishlistProvider from './context/Wishlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <MockDataProvider>
          <CartProvider>
            <WishlistProvider>
              <BrowserRouter>
                <ScrollToTop />
                <App />
              </BrowserRouter>
            </WishlistProvider>
          </CartProvider>
        </MockDataProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
