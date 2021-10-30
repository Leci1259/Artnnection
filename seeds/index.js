const sequelize = require("../config/connection");
const seedArt = require("./artData");
const seedUsers = require("./userData");
const seedArtists = require("./artistData");
const seedFav = require("./favoriteData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedArtists();

  await seedUsers();

  await seedArt();

  process.exit(0);
};

seedAll();
