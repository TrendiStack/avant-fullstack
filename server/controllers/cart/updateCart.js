const handleUpdateCart = async (req, res) => {
  const email = req.header('user-email');
  const { cart } = req.body;

  // Validation
  if (!email) {
    return res.status(400).json({ msg: 'Please enter an email' });
  } else if (!cart) {
    return res.status(400).json({ msg: 'Please enter a cart' });
  }

  // Check for existing user
  const user = await User.findOne({ email: email });

  if (!user) return res.status(400).json({ msg: 'User does not exist' });

  // Update cart
  user.cart = cart;

  // Save updated user
  const updatedUser = await user.save();

  // send updated user info to client
  res.json({
    msg: 'Cart updated',
    user: {
      cart: updatedUser.cart,
    },
  });
};

module.exports = {
  handleUpdateCart: handleUpdateCart,
};
