const handleFirstNameChange = async (req, res, jwt) => {
  // Data from the form
  const { email, firstName } = req.body;

  // Validation
  if (!firstName) {
    return res.status(400).json({ msg: 'Please enter a first name' });
  } else if (firstName.length < 2) {
    return res
      .status(400)
      .json({ msg: 'First name must be at least 2 characters' });
  }

  // Check for existing user
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ msg: 'User does not exist' });

  // Check if first name is already that of the user
  if (user.firstName === firstName) {
    return res
      .status(400)
      .json({ msg: 'Your First name is already set to that name' });
  }

  // Update first name
  user.firstName = firstName;
  await user.save();

  // send updated user info to client
  res.json({
    msg: 'First name updated',
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
  handleFirstnameChange: handleFirstNameChange,
};
