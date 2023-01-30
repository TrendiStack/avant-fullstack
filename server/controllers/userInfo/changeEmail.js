const { validateEmail } = require('../validators/validateEmail');
const handleEmailChange = async (req, res, jwt) => {
  // Data from the form
  const { email, newEmail } = req.body;

  // Validation
  if (!newEmail) {
    return res.status(400).json({ msg: 'Please enter an email' });
  } else if (!validateEmail(newEmail)) {
    return res.status(400).json({ msg: 'Please enter a valid email' });
  }

  // Check for existing user
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).json({ msg: 'User does not exist' });

  // Check if user already has an account with the new email
  if (user.email === newEmail) {
    return res.status(400).json({ msg: 'Already using this email' });
  }

  // Update email name
  user.email = newEmail;
  await user.save();

  // Create and assign a token

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  // send updated user info to client

  res.json({
    msg: 'Email updated',
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
  handleEmailChange: handleEmailChange,
};
