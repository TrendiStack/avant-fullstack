const AWS = require('aws-sdk');
const fs = require('fs');

// Set S3 config
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadToS3 = (file, callback) => {
  // Set params
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: fs.readFileSync(file.path),
    ContentType: file.mimetype,
    ACL: 'public-read',
  };

  // Upload file to S3
  s3.upload(params, (err, data) => {
    if (err) {
      callback(err);
    }
    if (data) {
      callback(null, data.Location);
    }
  });
};

module.exports = uploadToS3;
