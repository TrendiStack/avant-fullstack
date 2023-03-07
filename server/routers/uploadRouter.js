const auth = require('../middleware/auth');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const router = require('express').Router();
const uploadToS3 = require('../utils/uploadToS3');
const { profilePic } = require('../controllers/userInfo/index');
const User = require('../models/User');

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), auth, (req, res) => {
  // Check if file is uploaded
  if (!req.file) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  // Upload file to S3/AWS
  uploadToS3(req.file, (err, url) => {
    if (err) {
      res.status(500).json({ msg: err.message });
    }
    if (url) {
      // Update user profile picture
      profilePic.handleChangeProfilePicture(req, res, url);
    }
  });

  // Delete file from server
  fs.unlink(req.file.path, err => {
    if (err) {
      console.log(err);
    }
  });
});

module.exports = router;
