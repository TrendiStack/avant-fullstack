const handleLoggedIn = (req, res, jwt) => {
  const token = req.header('auth-token');
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.json({
      token,
      loggedIn: true,
    });
  } catch (err) {
    res.json({
      token: 'Invalid Token or you are not logged in',
      loggedIn: false,
    });
  }
};

module.exports = handleLoggedIn;
