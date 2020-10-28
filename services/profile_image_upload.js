const aws = require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const env = require('../config/environment');

aws.config.update({
  accessKeyId: env.aws.id,
  secretAccessKey: env.aws.secret,
  region: env.aws.bucket_region,
});

const s3 = new aws.S3();

const fileFilter = (request, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    cb(false);
  }
};

var upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: env.aws.bucket_name,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: 'Profile_image' });
    },
    key: function (req, file, cb) {
      cb(null, 'Profile_image-' + Date.now().toString());
    },
  }),
});

module.exports = upload;
