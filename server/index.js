const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();

passport.use(GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callBaclURL: '/auth/google/callback'
}), (accessToken) => {
    console.log(accessToken);
});

// app.get('/', (req, res) => {
//     res.send({message: 'hi there, im get'});
// });

app.listen(5000);