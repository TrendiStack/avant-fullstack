import { AuthContext } from './context/AuthContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
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
function App() {
  const { isAuthenticated, user } = useContext(AuthContext);

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
            path="profile"
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
          <Route path="search/results/:query" element={<SearchResults />} />
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
