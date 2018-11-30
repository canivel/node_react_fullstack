const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    //check the code in the url and handle the request
    app.get(
        '/auth/google/callback',
        passport.authenticate('google')
    );
}