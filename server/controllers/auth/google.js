const handleGoogleCallback = async (req, res, jwt, bcrypt) => {
  const { googleUser } = req.body;
  const { given_name, family_name, email, nickname, picture, sub } = googleUser;
  const existingUser = await User.findOne({ email: email });
  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(sub, salt);
  try {
    if (existingUser) {
      res
        .header('user-email', email)
        .header('auth-token', token)
        .json({
          token,
          user: {
            id: existingUser._id,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
            email: existingUser.email,
            isVerified: existingUser.isVerified,
            username: existingUser.username,
            profilePic: existingUser.profilePic,
          },
        });
    } else {
      const newUser = new User({
        firstName: given_name,
        lastName: family_name,
        email: email,
        username: nickname,
        password: passwordHash,
        profilePic: picture,
      });
      const savedUser = await newUser.save();
      const subject = 'Verify your email';
      const text = `Please click the link below to verify your email address: ${process.env.BACKEND_URL}/api/auth/verify-email/${savedUser._id}/${token}`;
      sendEmail(email, subject, text);
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
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = handleGoogleCallback;
