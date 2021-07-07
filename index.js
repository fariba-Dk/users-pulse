const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
); //new instance of GS

//SINGLE ROUTE-HANDLER   GET
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
const PORT = process.env.PORT || 4960;
//In PRODUCTION, See if heroku providing a PORT || But if we are running on our sever then use 5000 in DEVELOPMENT env
app.listen(PORT);
