const User = require('../../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.createSession = async function (request, response) {
  try {
    let user = await User.findOne({
      where: { email: request.body.email.toLowerCase() },
    });

    if (!user) {
      return response.status(200).json({
        success: false,
        message: 'User account not exist with these email',
      });
    }
    bcrypt.compare(request.body.password, user.password, function (
      err,
      result
    ) {
      if (result != true) {
        return response.status(422).json({
          success: false,
          message: 'Invalid email or password',
        });
      }
      user = user.dataValues;
      delete user.password;
      return response.status(200).json({
        success: true,
        data: {
          token: jwt.sign(user, 'tricog', { expiresIn: 10000 }),
        },
        message: 'Here is your token for authentication, keep it safe.',
      });
    });
  } catch (err) {
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
