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

  // check is user already has an account with the new last name
  if (user.lastName === lastName) {
    return res.status(400).json({ msg: 'Already using this last name' });
  }

  // Update last name
  user.lastName = lastName;
  await user.save();

  // send updated user info to client
  res.json({
    msg: 'Last name updated',
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
