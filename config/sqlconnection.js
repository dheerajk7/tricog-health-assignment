const Sequelize = require('sequelize');

const connection = new Sequelize('tricog_assignment_db', 'dheeraj', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorAliases: false,
});

module.exports = connection;
