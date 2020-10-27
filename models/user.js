const mongoose = require("mongoose");

// creating user model
const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  function: {
    type: String,
  },
  sub_function: {
    type: String,
  },
  company: {
    type: String,
    required: true,
  },
  core_skills: [{ type: String }],
  soft_skills: [{ type: String }],
  location: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  compensation: {
    type: String,
    required: true,
  },
  job_description: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
