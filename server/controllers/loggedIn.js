const handleLoggedIn = (req, res, jwt) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json(false);
    }
    const verified = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          return res.json(false);
        } else {
          return res.json(true);
        }
      }
    );

    console.log('verified: ', verified);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  } finally {
    console.log('handleLoggedIn() executed');
  }
};

module.exports = {
  handleLoggedIn: handleLoggedIn,
};
