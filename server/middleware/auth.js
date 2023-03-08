const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('auth-token');

    // Check if token exists
    if (!token) {
      return res
        .status(401)
        .json({ msg: 'No authentication token, authorization denied' });
    }
    // Verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res
        .status(401)
        .json({ msg: 'Token verification failed, authorization denied' });
    }
    // Set user id to req.user
    req.user = verified.id;

    // Continue to next middleware
    next();
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = auth;
