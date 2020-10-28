const User = require('../../../models/user');
const Sequelize = require('sequelize');
const singleUpload = require('../../../services/profile_image_upload').single(
  'profile_image'
);

// creating new user
module.exports.createUser = async function (request, response) {
  try {
    let user = await User.findOne({
      where: Sequelize.or(
        { email: request.body.email.toLowerCase() },
        { PAN_number: request.body.PAN_number }
      ),
    });
    if (user !== null) {
      return response.status(200).json({
        success: true,
        message: 'User already exist either with email or PAN Number',
      });
    }

    if (request.file === undefined) {
      return response.status(422).json({
        success: false,
        message: 'Invalid profile image',
      });
    }

    user = await User.create({
      first_name: request.body.first_name,
      email: request.body.email,
      PAN_number: request.body.PAN_number,
      date_of_birth: request.body.date_of_birth,
      profile_image: request.file.location,
      password: request.body.password,
    });

    if (user === null) {
      return response
        .status(200)
        .json({ success: true, message: 'Error in creating User' });
    }
    return response
      .status(200)
      .json({ success: true, message: 'User Created Successfully' });
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

module.exports.getUserProfile = async function (request, response) {
  try {
    console.log(request.user.user_id, 'request');
    let user = await User.findOne({ where: { user_id: request.user.user_id } });
    user = user.dataValues;
    delete user.password;
    return response.status(200).json({
      success: true,
      message: 'User Profile Fetched Successfully',
      user: user,
    });
  } catch (err) {
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
