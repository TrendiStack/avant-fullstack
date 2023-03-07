const handleUsername = async (req, res, jwt) => {
  // Data from the form
  const { email, username } = req.body;

  // Validation
  if (!username) {
    return res.status(400).json({ msg: 'Please enter a username' });
  } else if (username.length < 6) {
    return res
      .status(400)
      .json({ msg: 'Username must be at least 6 characters' });
  }

  // Check for existing user
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ msg: 'User does not exist' });

  //   check if username is taken by another user
  const userMatch = await User.findOne({ username: username });
  if (user.email === email && user.username === username) {
    return res
      .status(400)
      .json({ msg: 'Username is already set to this value' });
  }
  if (userMatch) return res.status(400).json({ msg: 'Username is taken' });

  // Update username
  user.username = username;
  await user.save();

  // send token and updated user info to client
  res.json({
    msg: 'Username updated',
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      profilePic: user.profilePic,
    },
  });
};

module.exports = {
  handleUsername: handleUsername,
};
