const handleLogin = async (req, res, jwt, bcrypt) => {
  try {
    // Data from the form
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create and assign a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Send token to client
    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .json({
        token,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          username: user.username,
          darkMode: user.darkMode,
        },
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  handleLogin: handleLogin,
};
