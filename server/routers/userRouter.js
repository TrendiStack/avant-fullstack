const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const {
  register,
  login,
  logout,
  loggedIn,
  verifyEmail,
} = require('../controllers/auth/index');

// Register
router.post('/', async (req, res) => {
  register(req, res, jwt, bcrypt);
});

// Login
router.post('/login', async (req, res) => {
  login(req, res, jwt, bcrypt);
});

// Logout
router.get('/logout', (req, res) => {
  logout(req, res);
});

// Logged In
router.get('/loggedin', (req, res) => {
  loggedIn(req, res, jwt);
});

// Verify Email
router.get('/verify-email/:id/:token', async (req, res) => {
  verifyEmail(req, res, jwt);
});

module.exports = router;
