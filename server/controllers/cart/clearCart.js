const handleClearCart = async (req, res) => {
  const { email } = req.body;

  // Validation
  if (!email) {
    return res.status(400).json({ msg: 'Please enter an email' });
  }

  // Check for existing user
  const user = await User.findOne({ email: email });

  if (!user) return res.status(400).json({ msg: 'User does not exist' });

  // Clear cart
  user.cart = [];

  // Save updated user
  const updatedUser = await user.save();

  // send updated user info to client
  res.json({
    msg: 'Cart cleared',
    user: {
      cart: updatedUser.cart,
    },
  });
};

module.exports = {
  handleClearCart: handleClearCart,
};
