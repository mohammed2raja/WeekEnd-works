const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID: "343170157305-jls388b1u31j06amv5noj9f8ka15ekpc.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback: true,
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });