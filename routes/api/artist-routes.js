const router = require("express").Router();
const { Artist } = require("../../models");

// Get All Artists
router.get("/", async (req, res) => {
  try {
    const artistData = await Artist.findAll();
    const artists = artistData.map((project) => project.get({ plain: true }));
    res.status(200).json(artists);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create New Artist
router.post("/login", async (req, res) => {
  try {
    const newArtist = await Artist.create({
      // get data from form
      //   name: ,
    });
    res.status(200).json(newArtist);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
