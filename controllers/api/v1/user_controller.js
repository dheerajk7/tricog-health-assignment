const User = require('../../../models/user');
const singleUpload = require('../../../services/profile_image_upload').single(
  'profile_image'
);

// creating new user
module.exports.createUser = async function (request, response) {
  try {
    let user = await User.findOne({ where: { email: request.body.email } });
    if (user !== null) {
      return response
        .status(200)
        .json({ success: true, message: 'User already exist' });
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

// getting all the jobs available
module.exports.getUserProfile = async function (request, response) {
  try {
    let user = await User.findAll();
    let users = [];
    for (let u of user) {
      console.log(u);
      delete u.dataValues.password;
      console.log(u, 'after');
      users.push(u);
    }
    return response.status(200).json({
      success: true,
      message: 'User Profile Fetched Successfully',
      user: users,
    });
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
