const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
//to extract JWT from payload or header
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const env = require('./environment');

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: env.jwt_secret,
};

passport.use(
  new JWTStrategy(opts, async function (jwtPayLoad, done) {
    let user = await User.findOne({ where: { user_id: jwtPayLoad.user_id } });
    if (user) {
      return done(null, user.dataValues);
    } else {
      return null, false;
    }
  })
);

module.exports = passport;
