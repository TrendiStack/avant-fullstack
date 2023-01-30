const handeChangePassword = async (req, res, jwt, bcrypt) => {
  // Data from the form
  const { email, password, verifyPassword } = req.body;

  // Validation
  if (!password || !verifyPassword) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }
  if (password !== verifyPassword) {
    return res.status(400).json({ msg: 'Passwords do not match' });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: 'Password must be at least 6 characters' });
  }

  // Check for existing user
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ msg: 'User does not exist' });

  // Hash password
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  // Update password
  user.password = hash;
  await user.save();

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  // send updated user info to client
  res.json({
    msg: 'Password updated',
    token,
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
    },
  });
};

module.exports = {
  handlePasswordChange: handeChangePassword,
};
