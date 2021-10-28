const { Artist } = require("../models");

const artistData = [
  {
    name: "Artist 1",
    email: "art1@test.com",
    biography:
      "I am Artist 1 and I make cool art that focuses on nature. Hit me up!",
    twitter: "@artist_one",
    password: "test1234"
  },
  {
    name: "Artist 2",
    email: "art2@test.com",
    biography:
      "I am Artist 2 and I make clay sculptures. Let me know if you want me to make you a one-of-a-kind custom!",
    twitter: "@art_grl_2",
    password: "test1234",
  },
  {
    name: "Artist 3",
    email: "art3@test.com",
    biography:
      "I am Artist 3 and I design jpegs for phone and web backgrounds.",
    twitter: "@art3ist",
    password: "test1234",
  },
];

const seedArtist = () => Artist.bulkCreate(artistData);

module.exports = seedArtist;
