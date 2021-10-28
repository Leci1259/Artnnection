const router = require("express").Router();
const { Art } = require("../../models");
const withAuth = require("../../utils/auth");

// Get All Art
router.get("/", async (req, res) => {
  try {
    const artData = await Art.findAll();
    const art = artData.map((project) => project.get({ plain: true }));
    res.status(200).json(art);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Get Art by Artist
router.get("/:id", async (req, res) => {
  try {
    const artData = await Art.findAll({
      where: {
        artist_id: req.params.id,
    }});
    const art = artData.map((project) => project.get({ plain: true }));
    res.status(200).json(art);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create New Art
router.post("/post", withAuth, async (req, res) => {
  try {
    const newArt = await Art.create({
      art_name: req.body.art_name,
      price: req.body.price,
      stock: req.body.stock,
      artist_id: req.body.artist.id
    });
    res.status(200).json(newArt);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
