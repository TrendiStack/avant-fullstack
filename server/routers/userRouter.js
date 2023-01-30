const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {
  register,
  login,
  logout,
  loggedIn,
} = require('../controllers/auth/index');
const {
  username,
  firstName,
  lastName,
  email,
  password,
} = require('../controllers/userInfo/index');

// AUTH ROUTES

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

// USER INFO ROUTES

// Change Username
router.post('/changeusername', async (req, res) => {
  username.handleUsername(req, res, jwt);
});

// Change First Name
router.post('/changefirstname', async (req, res) => {
  firstName.handleFirstnameChange(req, res, jwt);
});

// Change Last Name
router.post('/changelastname', async (req, res) => {
  lastName.handleLastNameChange(req, res, jwt);
});

// Change Email
router.post('/changeemail', async (req, res) => {
  email.handleEmailChange(req, res, jwt);
});

// Change Password
router.post('/changepassword', async (req, res) => {
  password.handlePasswordChange(req, res, jwt, bcrypt);
});

module.exports = router;
