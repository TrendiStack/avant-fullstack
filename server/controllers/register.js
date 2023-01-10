const handleRegister = async (req, res, jwt, bcrypt) => {
  const { firstName, lastName, email, username, password, passwordVerify } =
    req.body;
  try {
    //validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !username ||
      !password ||
      !passwordVerify
    ) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: 'Password must be at least 6 characters' });
    }
    if (password !== passwordVerify) {
      return res.status(400).json({ msg: 'Passwords do not match' });
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    // Hash password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Save new user to db
    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: passwordHash,
    });

    const savedUser = await newUser.save();
    // res.json(savedUser);
    //login the user

    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

    // send token to client
    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .json({
        token,
        user: {
          id: savedUser._id,
          firstName: savedUser.firstName,
          lastName: savedUser.lastName,
          email: savedUser.email,
          username: savedUser.username,
          darkMode: savedUser.darkMode,
        },
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  handleRegister: handleRegister,
};
