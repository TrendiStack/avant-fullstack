const handleLoggedIn = (req, res, jwt) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json(false);
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.json(false);
    }
    res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  handleLoggedIn: handleLoggedIn,
};
