const router = require('express').Router();
const { Art, Artist, User, Cart } = require('../models');

// Home Page Route
router.get('/', async (req, res) => {
  try {
    const artData = await Art.findAll({
      include: Artist,
    });
    const artistData = await Artist.findAll();

    const artPieces = artData.map((project) => project.get({ plain: true }));
    const artists = artistData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      artPieces, artists,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Artist Profile Route
router.get('/artistprofile/:id', async (req, res) => {
  try {
    const artData = await Art.findAll({
      where: {
        artist_id: req.params.id
      },
      include: Artist,
    });

    const artistData = await Artist.findByPk(req.params.id);

    const artist = artistData.get({ plain: true });
    const artPieces = artData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('artist_profile', { 
      artist, artPieces
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

// Artists Page Route
router.get('/artists', async (req, res) => {
  try {
    const artistData = await Artist.findAll();
    const artists = artistData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('artists', { 
      artists
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Checkout Page Route
router.get('/checkout', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('checkout');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Checkout Done Page Route
router.get('/checkoutSuccess', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('checkout_done');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Page Route
router.get('/login', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout Page Route
router.get('/logout', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('logout');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Search Page Route
router.get('/search', async (req, res) => {
  try {
    res.render('search');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Search Page Route
router.get('/search-results/:id', async (req, res) => {
  console.log("here meep")
  try {
    const artData = await Art.findAll({where: { id: req.params.id }});
    const artPieces = artData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
     console.log(artPieces)
     res.render('search', { artPieces });
  } catch (err) {
    res.status(500).json(err);
  }
});

// User Profile Page Route
router.get('/userprofile/:id', async (req, res) => {
  try {
    const artData = await Art.findAll();
    const artistData = await Artist.findAll();

    const artist = artistData.map((project) => project.get({ plain: true }));
    const artPieces = artData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('user_profile', { 
      artist, artPieces
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
