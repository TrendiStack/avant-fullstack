import axios from 'axios';

const handleCart = async (token, user, setCart) => {
  if (!token) return;
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/cart`,
      {
        headers: { 'auth-token': token, 'user-email': user.email },
      }
    );
    localStorage.setItem('cart', JSON.stringify(data.user.cart));
    setCart(data.user.cart);
  } catch (err) {
    console.error('Error while updating cart. Error: ', err.response.data.msg);
  }
};

export default handleCart;
