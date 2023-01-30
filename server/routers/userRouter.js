const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { register, login, logout, loggedIn } = require('../controllers/index');
const { username } = require('../controllers/userInfo/index');

// Register
router.post('/', async (req, res) => {
  register.handleRegister(req, res, jwt, bcrypt);
});

// Login
router.post('/login', async (req, res) => {
  login.handleLogin(req, res, jwt, bcrypt);
});

// Logout
router.get('/logout', (req, res) => {
  logout.handleLogout(req, res);
});

// Logged In
router.get('/loggedin', (req, res) => {
  loggedIn.handleLoggedIn(req, res, jwt);
});

// Change Username
router.post('/changeusername', async (req, res) => {
  username.handleUsername(req, res, jwt);
});

module.exports = router;
