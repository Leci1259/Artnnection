const router = require("express").Router();
const bcrypt = require('bcrypt');
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

// Get All Users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create New User
router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Log User In
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.create(() => {
      req.session.email = userData.email;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Log User Out
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
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
