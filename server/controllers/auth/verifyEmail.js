const handleVerifyEmail = async (req, res, jwt) => {
  try {
    const { id, token } = req.params;

    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const idStringified = user._id.toString();

    if (decodedToken.id !== idStringified) {
      return res.status(400).json({ msg: 'Invalid token' });
    }

    user.isVerified = true;
    user.save();

    res.json({ msg: 'Email verified' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = handleVerifyEmail;
