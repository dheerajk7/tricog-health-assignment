const development = {
  name: 'development',
  database: {
    name: 'tricog_assignment_db',
    host: '127.0.0.1',
    username: 'dheeraj',
    password: '',
  },
};

const production = {
  name: 'production',
  database: {
    name: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
};

module.exports =
  eval(process.env.TRICOG_ENVIRONMENT) == undefined ? development : production;
