const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

const customFields = {
    usernameField: "email",
    passwordField: "password"
};

const verifyCallback = (username, password, done) => {
    User.findOne({ where: { email: username }}).then(
        (user) => {
            //if no user, return done(null, false)
            if(user) {
                if (password == user.password) {
                    //if password match, return done(null, user)
                    return done(null, user)
                } else {
                    //if password doesnt match, return done(null, false)
                    return done(null, false)
                }
            } else {
                return done(null, false)
            }
        }
    ).catch((err) => {
        console.log("Failed at verifyCallback")
        done(err)
    });
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    User.findOne({ where: { id: userId }}).then(
        (user) => done(null, user)
    ).catch(err => {
        console.log("Failed at deserializeUser");
        done(err);
    });
});