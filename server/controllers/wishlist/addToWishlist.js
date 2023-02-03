const handleAddToWishlist = async (req, res) => {
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

  // Check if product is already in wishlist
  const productExists = user.wishlist.find(
    wishlistProduct => wishlistProduct.id === product.id
  );

  if (productExists) {
    return res.status(400).json({ msg: 'Product already in wishlist' });
  }

  // Add product to wishlist
  user.wishlist.push(product);

  // Save updated user
  const updatedUser = await user.save();

  // send updated user info to client
  res.json({
    msg: 'Product added to wishlist',
    user: {
      wishlist: updatedUser.wishlist,
    },
  });
};

module.exports = {
  handleAddToWishlist: handleAddToWishlist,
};
