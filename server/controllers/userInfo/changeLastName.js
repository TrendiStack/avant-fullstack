const handleLastNameChange = async (req, res, jwt) => {
  // Data from the form
  const { email, lastName } = req.body;

  // Validation
  if (!lastName) {
    return res.status(400).json({ msg: 'Please enter a last name' });
  } else if (lastName.length < 2) {
    return res
      .status(400)
      .json({ msg: 'Last name must be at least 2 characters' });
  }

  // Check for existing user
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ msg: 'User does not exist' });

  // Update last name
  user.lastName = lastName;
  await user.save();

  // Create and assign a token

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  // send updated user info to client

  res.json({
    msg: 'Last name updated',
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
  handleLastNameChange: handleLastNameChange,
};
