const development = {
  name: 'development',
  database: {
    name: 'tricog_assignment_db',
    host: '127.0.0.1',
    username: 'dheeraj',
    password: '',
  },
  jwt_secret: 'tricog',
  aws: {
,
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
  aws: {
    id: process.env.AWS_ID,
    secret: process.env.AWS_SECRET,
    bucket_name: process.env.AWS_BUCKET_NAME,
    bucket_region: process.env.AWS_BUCKET_REGION,
  },
};

module.exports =
  eval(process.env.TRICOG_ENVIRONMENT) == undefined ? development : production;
