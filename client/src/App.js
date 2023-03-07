import { AuthContext } from './context/AuthContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import { SearchResults } from './pages/SearchResults';
import { useContext } from 'react';
import Cart from './pages/Cart';
import ChangePassword from './pages/ChangePassword';
import Checkout from './pages/Checkout';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Nav from './components/nav/Nav';
import PageNotFound from './pages/PageNotFound';
import Product from './pages/Product';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SighUp.jsx';
import Success from './pages/Success';
import Wishlist from './pages/Wishlist';
import useLenisSmoothscroll from './hooks/useLenisSmoothscroll';
import Verify from './pages/Verify';
function App() {
  const { isAuthenticated, user } = useContext(AuthContext);
  useLenisSmoothscroll();

  return (
    <div className="min-h-[100vh] theme">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="shop/categories/" element={<Shop />} />
          <Route path="shop/categories/:category" element={<Products />} />
          <Route path="product/:productID" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/home" />}
          />
          <Route
            path="sign-up"
            element={isAuthenticated ? <Navigate to="/home" /> : <SignUp />}
          />
          <Route
            path="sign-in"
            element={isAuthenticated ? <Navigate to="/home" /> : <SignIn />}
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
          <Route path="search/:id" element={<SearchResults />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Navigate to="/home/cart" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
