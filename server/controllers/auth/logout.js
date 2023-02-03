const handleLogout = (req, res) => {
  res.clearCookie('user-email');
  res.clearCookie('auth-token');
  res.json({ msg: 'Logged out successfully' });
};

module.exports = {
  handleLogout: handleLogout,
};
