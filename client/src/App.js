import { Route, Routes, Navigate } from 'react-router-dom';
import { SearchResults } from './pages/SearchResults';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Nav from './components/nav/Nav';
import Product from './pages/Product';
import Shop from './pages/Shop';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SighUp.jsx';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Success from './pages/Success';
import PageNotFound from './pages/PageNotFound';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { isAuthenticated, user } = useContext(AuthContext);
  console.log(user);
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
            element={
              isAuthenticated ? <Profile /> : <Navigate to="/home/sign-in" />
            }
          />
          <Route
            path="sign-up"
            element={isAuthenticated ? <Navigate to="/home" /> : <SignUp />}
          />
          <Route
            path="sign-in"
            element={isAuthenticated ? <Navigate to="/home" /> : <SignIn />}
          />
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
