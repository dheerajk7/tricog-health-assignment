const User = require('../../../models/user');

// searching for job with location, pincode and skills
module.exports.createSession = async function (request, response) {
  try {
    return response.status(200).json({
      success: true,
      message: 'Authentication Successful, Keep your token safe',
      token: '123455767',
    });
  } catch (err) {
    return response.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
