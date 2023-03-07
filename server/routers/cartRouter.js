const router = require('express').Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const { cart, clearCart, updateCart } = require('../controllers/cart/index');

// retrieve user cart
router.get('/', auth, async (req, res) => {
  cart.handleCart(req, res);
});

// update cart
router.post('/update', auth, async (req, res) => {
  updateCart.handleUpdateCart(req, res);
});

// clear cart
router.post('/clear', auth, async (req, res) => {
  clearCart.handleClearCart(req, res);
});

module.exports = router;
