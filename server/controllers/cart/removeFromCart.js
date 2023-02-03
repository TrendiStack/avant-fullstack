const handleRemoveFromCart = async (req, res) => {
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

  // Check if product is in cart
  const productExists = user.cart.find(
    cartProduct => cartProduct._id === product._id
  );

  if (!productExists) {
    return res.status(400).json({ msg: 'Product not in cart' });
  }

  // Remove product from cart
  user.cart = user.cart.filter(cartProduct => cartProduct._id !== product._id);

  // Save updated user
  const updatedUser = await user.save();

  // send updated user info to client
  res.json({
    msg: 'Product removed from cart',
    user: {
      cart: updatedUser.cart,
    },
  });
};

module.exports = {
  handleRemoveFromCart: handleRemoveFromCart,
};
