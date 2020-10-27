const User = require("../models/user");

// creating new user
module.exports.createUser = async function (request, response) {
  try {
    return response.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (err) {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// getting all the jobs available
module.exports.getUserProfile = async function (request, response) {
  try {
    return response.status(200).json({
      success: true,
      message: "User Profile Fetched Successfully",
      user: [],
    });
  } catch {
    console.log(err);
    return response.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
