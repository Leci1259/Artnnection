const { Art } = require("../models");

const artData = [
  {
    art_name: "Paintings on the Wall",
    price: 1000.0,
    stock: 2,
    artist_id: 3,
    image_location: '../assets/images/1.jpg'
  },
  {
    art_name: "Seeds in the Sky",
    price: 2000.0,
    stock: 5,
    artist_id: 1,
    image_location: '../assets/images/2.jpg'

  },
  {
    art_name: "Brushes and Stuff",
    price: 3000.0,
    stock: 12,
    artist_id: 2,
    image_location: '../assets/images/3.jpg'

  },
  {
    art_name: "Pretty Art",
    price: 52345.5,
    stock: 1,
    artist_id: 3,
    image_location: '../assets/images/4.jpg'

  },
  {
    art_name: "Easter Island",
    price: 25.0,
    stock: 100,
    artist_id: 3,
    image_location: '../assets/images/5.jpg'

  },
];

const seedArt = () => Art.bulkCreate(artData);

module.exports = seedArt;
