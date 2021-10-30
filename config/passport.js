const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const connection = require("./connection");
const User = require("../models/User");


const customFields = {
    usernameField: "name",
    passwordField: "password"
};


const verifyCallback = (username, password, done) => {
    User.findOne({ where: { name: username }});
}

const strategy = new LocalStrategy();

passport.use();