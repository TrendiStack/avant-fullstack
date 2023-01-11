const handleLogout = (req, res) => {
  res.send('You are logged out');
};

module.exports = {
  handleLogout: handleLogout,
};
