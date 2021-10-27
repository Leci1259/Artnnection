const { Art } = require("../models");

const artData = [
  {
    art_name: "Art 1",
    price: 1000.0,
    stock: 2,
    artist_id: 3,
  },
  {
    art_name: "Art 2",
    price: 2000.0,
    stock: 5,
    artist_id: 1,
  },
  {
    art_name: "Art 3",
    price: 3000.0,
    stock: 12,
    artist_id: 2,
  },
  {
    art_name: "Art 4",
    price: 52345.5,
    stock: 1,
    artist_id: 3,
  },
  {
    art_name: "Art 5",
    price: 25.0,
    stock: 100,
    artist_id: 3,
  },
];

const seedArt = () => Art.bulkCreate(artData);

module.exports = seedArt;
