const express = require('express');
const router = express.Router();
var userController = require('../../../controllers/api/v1/user_controller');
const singleUpload = require('../../../services/profile_image_upload');

//routes
router.post(
  '/create-user',
  singleUpload.single('profile_image'),
  userController.createUser
);
router.get('/profile', userController.getUserProfile);

module.exports = router;
