const Sequelize = require('sequelize');
const env = require('./environment');

const connection = new Sequelize(
  env.database.name,
  env.database.username,
  env.database.password,
  {
    host: env.database.host,
    dialect: 'mysql',
    operatorAliases: false,
  }
);

module.exports = connection;
