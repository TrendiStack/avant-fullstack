const handleChangeProfilePicture = async (req, res, url) => {
  // email from header
  const email = req.header('user-email');

  // Validation
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ msg: 'User does not exist' });

  // Update profile picture
  user.profilePic = url;
  await user.save();

  // send updated user info to client
  res.json({
    msg: 'Profile picture updated',
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
  handleChangeProfilePicture: handleChangeProfilePicture,
};
