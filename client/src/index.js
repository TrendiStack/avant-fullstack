import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import MockDataProvider from './context/MockDataContext';
import ThemeContextProvider from './context/ThemeContext';
import './index.css';
import CartProvider from './context/CartContext';
import WishlistProvider from './context/Wishlist';
import ScrollToTop from './components/ScrollToTop';
import TitleContextProvider from './context/TitleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <MockDataProvider>
          <CartProvider>
            <WishlistProvider>
              <TitleContextProvider>
                <BrowserRouter>
                  <ScrollToTop />
                  <App />
                </BrowserRouter>
              </TitleContextProvider>
            </WishlistProvider>
          </CartProvider>
        </MockDataProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
