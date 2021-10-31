const router = require("express").Router();
const passport = require("passport");
const { User } = require("../../models");

// Get All Users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:email", async (req, res) => {
  try {
    User.findOne({where: {email: req.params.email}}).then((user) => {
      res.status(200).json(user);
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create New User
router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    passport.authenticate('local')(req, res, function() {
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// Log User In
router.post("/login", passport.authenticate('local'), (req,res) => { 
  if (req.isAuthenticated()) {
    res.status(200).json(req.user); 
  } else {
    res.status(401).end(); 
  }
});

// Log User Out
router.post("/logout", (req, res) => {
  req.logOut();
  res.redirect('/');
});

// Create New User
router.post("/checkout", async (req, res) => {
  try {
    console.log("Checkout Successfully")
    res.status(200);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
