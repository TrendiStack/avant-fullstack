const handleLoggedIn = (req, res, jwt) => {
  try {
    // get the token from the request
    const token = req.cookies.token;
    if (!token) return res.json(false); // if there is no token return false
    // verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.json(false); // if token is not valid return false
      return res.json(true); // if token is valid return true
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  handleLoggedIn: handleLoggedIn,
};
