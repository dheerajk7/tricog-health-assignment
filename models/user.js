const Sequelize = require('sequelize');
const connection = require('../config/sqlconnection');
const bcrypt = require('bcrypt');
const User = connection.define(
  'User',
  {
    user_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    PAN_number: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    date_of_birth: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profile_image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    hooks: {
      afterValidate: function (user) {
        user.password = bcrypt.hashSync(user.password, 7);
      },
    },
  }
);
module.exports = User;
