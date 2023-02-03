const handleRemoveFromWishlist = async (req, res) => {
  const { email, product } = req.body;

  // Validation
  if (!email) {
    return res.status(400).json({ msg: 'Please enter an email' });
  }
  if (!product) {
    return res.status(400).json({ msg: 'Please enter a product' });
  }

  // Check for existing user
  const user = await User.findOne({ email: email });

  if (!user) return res.status(400).json({ msg: 'User does not exist' });

  // Check if product is in wishlist
  const productExists = user.wishlist.find(
    wishlistProduct => wishlistProduct._id === product._id
  );

  if (!productExists) {
    return res.status(400).json({ msg: 'Product not in wishlist' });
  }

  // Remove product from wishlist
  user.wishlist = user.wishlist.filter(
    wishlistProduct => wishlistProduct._id !== product._id
  );

  // Save updated user
  const updatedUser = await user.save();

  // send updated user info to client
  res.json({
    msg: 'Product removed from wishlist',
    user: {
      wishlist: updatedUser.wishlist,
    },
  });
};

module.exports = {
  handleRemoveFromWishlist: handleRemoveFromWishlist,
};
