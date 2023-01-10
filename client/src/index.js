import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import MockDataProvider from './context/MockDataContext';
import ThemeContextProvider from './context/ThemeContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <MockDataProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MockDataProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
