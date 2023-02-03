const router = require('express').Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const {
  cart,
  addToCart,
  removeFromCart,
  clearCart,
} = require('../controllers/cart/index');

// retrieve user cart
router.get('/', auth, async (req, res) => {
  cart.handleCart(req, res);
});

// add product to cart
router.post('/add', auth, async (req, res) => {
  addToCart.handleAddToCart(req, res);
});

// remove product from cart
router.post('/remove', auth, async (req, res) => {
  removeFromCart.handleRemoveFromCart(req, res);
});

// clear cart
router.post('/clear', auth, async (req, res) => {
  clearCart.handleClearCart(req, res);
});

module.exports = router;
