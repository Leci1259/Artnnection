const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.isAuthenticated()) {
    res.redirect("/login");
  } else {
    next();
  }
};

// function generatePassword(password) {
//   //TODO: Hash plaintext password with salt
// }

// function validPassword(password) {
//   //validate the input password using hash and salt from db
// }

// module.exports.generatePassword = generatePassword;
// module.exports.validPassword = validPassword;
module.exports = withAuth;
