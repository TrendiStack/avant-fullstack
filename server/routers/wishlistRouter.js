const router = require('express').Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const {
  wishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = require('../controllers/wishlist/index');

// retrieve user wishlist
router.get('/', auth, async (req, res) => {
  wishlist.handleWishlist(req, res);
});

// add product to wishlist
router.post('/add', auth, async (req, res) => {
  addToWishlist.handleAddToWishlist(req, res);
});

// remove product from wishlist
router.post('/remove', auth, async (req, res) => {
  removeFromWishlist.handleRemoveFromWishlist(req, res);
});

// clear wishlist
router.post('/clear', auth, async (req, res) => {
  clearWishlist.handleClearWishlist(req, res);
});

module.exports = router;
