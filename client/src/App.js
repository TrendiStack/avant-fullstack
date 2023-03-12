import { AuthContext } from './context/AuthContext';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import {
  Landing,
  Home,
  Categories,
  Products,
  Product,
  Cart,
  Profile,
  SignUpForm,
  SignInForm,
  Verify,
  ChangePassword,
  Wishlist,
  SearchResults,
  Checkout,
  Success,
  PageNotFound,
} from './pages/index.js';
import Orders from './pages/orders/Orders';
import { TitleContext } from './context/TitleContext';
function App() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { setLocation } = useContext(TitleContext);
  const location = useLocation();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLocation(location.pathname);
  }, [location, setLocation]);

  return (
    <div className="min-h-[100vh] theme">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="shop/categories/" element={<Categories />} />
          <Route path="shop/categories/:category" element={<Products />} />
          <Route path="product/:productID" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="account"
            element={isAuthenticated ? <Profile /> : <Navigate to="/home" />}
          />
          <Route
            path="sign-up"
            element={isAuthenticated ? <Navigate to="/home" /> : <SignUpForm />}
          />
          <Route
            path="sign-in"
            element={isAuthenticated ? <Navigate to="/home" /> : <SignInForm />}
          />
          <Route
            path="verify"
            element={
              !isAuthenticated || user?.isVerified ? (
                <Navigate to="/home" />
              ) : (
                <Verify />
              )
            }
          />
          <Route
            path="change-password"
            element={
              isAuthenticated ? (
                <ChangePassword />
              ) : (
                <Navigate to="/home/profile" />
              )
            }
          />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="orders" element={<Orders />} />
          <Route path="search/results/:query" element={<SearchResults />} />
          {/* <Route path="checkout" element={<Checkout />} /> */}
        </Route>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Navigate to="/home/cart" />} />
        <Route path="*" element={<PageNotFound setNotFound={setNotFound} />} />
      </Routes>
      <Footer notFound={notFound} />
    </div>
  );
}

export default App;
