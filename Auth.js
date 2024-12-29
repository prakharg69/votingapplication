const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

passport.use(new LocalStrategy(async (Username, password, done) => {
    try {
        console.log('received data', Username, password);
        const user = await User.findOne({ username: Username });
        if (!user) return done(null, false, { message: 'User not found' });

        const validate = await user.comparePassword(password);
        if (validate) return done(null, user, { message: 'Logged in successfully' });
        else return done(null, false, { message: 'Wrong password' });
    } catch (err) {
        return done(err);
    }
}));

module.exports = passport;