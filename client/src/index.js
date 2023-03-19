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
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-eo7hc71b4vsfvcqo.us.auth0.com"
      clientId="BZmn1BWu0iEWKAR0Vlp0OKxrlypgPGaF"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
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
    </Auth0Provider>
  </React.StrictMode>
);
