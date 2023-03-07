const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  wishlist: {
    type: Array,
    default: [],
  },
  cart: {
    type: Array,
    default: [],
  },
  darkMode: {
    type: Boolean,
    default: true,
  },
  profilePic: {
    type: String,
    default: '',
  },
});

module.exports = User = mongoose.model('user', userSchema);
