const router = require("express").Router();
const { Artist, Art } = require("../../models");
const artistRoutes = require("./artist-routes");

router.use("/artists", artistRoutes);

Art.belongsTo(Artist, {
  foreignKey: "id",
});

Artist.hasMany(Art, {
  foreignKey: "id",
});

module.exports = router;
