const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

const {
  username,
  firstName,
  lastName,
  email,
  password,
} = require('../controllers/userInfo/index');

// Change Username
router.put('/changeusername', auth, async (req, res) => {
  username.handleUsername(req, res, jwt);
});

// Change First Name
router.put('/changefirstname', auth, async (req, res) => {
  firstName.handleFirstnameChange(req, res, jwt);
});

// Change Last Name
router.put('/changelastname', auth, async (req, res) => {
  lastName.handleLastNameChange(req, res, jwt);
});

// Change Email
router.put('/changeemail', auth, async (req, res) => {
  email.handleEmailChange(req, res, jwt);
});

// Change Password
router.put('/changepassword', auth, async (req, res) => {
  password.handlePasswordChange(req, res, jwt, bcrypt);
});

module.exports = router;
