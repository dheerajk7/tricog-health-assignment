const express = require('express');
const router = express.Router();
const passport = require('passport');
var userController = require('../../../controllers/api/v1/user_controller');
const singleUpload = require('../../../services/profile_image_upload');

//routes
router.post(
  '/create-user',
  singleUpload.single('profile_image'),
  userController.createUser
);
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  userController.getUserProfile
);

module.exports = router;
