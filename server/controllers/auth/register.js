const { validateEmail } = require('../validators/validateEmail');
const sendEmail = require('../../utils/email');

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
    if (!validateEmail(email)) {
      return res.status(400).json({ msg: 'Please enter a valid email' });
    }
    if (username.length < 6) {
      return res
        .status(400)
        .json({ msg: 'Username must be at least 6 characters' });
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
      profilePic: '',
    });

    const savedUser = await newUser.save();
    // res.json(savedUser);
    //login the user

    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

    // Send verification email
    const subject = 'Verify your email';
    const text = `Please click the link below to verify your email address: ${process.env.BACKEND_URL}/api/auth/verify-email/${savedUser._id}/${token}`;
    sendEmail(email, subject, text);

    // send token to client
    res
      .header('user-email', email)
      .header('auth-token', token)
      .json({
        token,
        user: {
          id: savedUser._id,
          firstName: savedUser.firstName,
          lastName: savedUser.lastName,
          email: savedUser.email,
          isVerified: savedUser.isVerified,
          username: savedUser.username,
          profilePic: savedUser.profilePic,
        },
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = handleRegister;
