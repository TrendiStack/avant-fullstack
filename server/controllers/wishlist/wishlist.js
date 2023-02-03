const handleWishlist = async (req, res) => {
  const email = req.header('user-email');

  // Validation
  if (!email) {
    return res.status(400).json({ msg: 'Please enter an email' });
  } else if (email.length < 2) {
    return res.status(400).json({ msg: 'Email must be at least 2 characters' });
  }

  // Check for existing user

  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ msg: 'User does not exist' });

  // send updated user info to client

  res.json({
    msg: 'Wishlist retrieved',
    user: {
      wishlist: user.wishlist,
    },
  });
};

module.exports = {
  handleWishlist: handleWishlist,
};
