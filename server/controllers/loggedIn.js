const handleLoggedIn = (req, res, jwt) => {
  try {
    const token = req.body.token;
    jwt.verify(token, process.env.JWT_SECRET);
    res.json({
      token,
      loggedIn: true,
    });
  } catch (err) {
    res.json({
      token: null,
      loggedIn: false,
    });
  }
};

module.exports = {
  handleLoggedIn: handleLoggedIn,
};
