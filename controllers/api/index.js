const router = require("express").Router();
const { Artist, Art, User, Cart, Favorite } = require("../../models");
const artistRoutes = require("./artist-routes");
const artRoutes = require("./art-routes");
const userRoutes = require("./user-routes");

router.use("/artist", artistRoutes);
router.use("/art", artRoutes);
router.use("/user", userRoutes);

Art.belongsTo(Artist, {
  foreignKey: "id",
});

Artist.hasMany(Art, {
  foreignKey: "id",
});

User.hasOne(Cart, {
  foreignKey: 'id'
});

Cart.belongsTo(User, {
  foreignKey: 'user_id',
})

module.exports = router;
