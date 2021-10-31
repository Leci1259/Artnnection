const { Artist } = require("../models");

const artistData = [
  {
    name: "Jimmy Paints",
    email: "art1@test.com",
    biography:
      "I am Jim and I make cool art that focuses on nature. Hit me up!",
    twitter: "@artist_one",
    password: "test1234"
  },
  {
    name: "Clay Smith",
    email: "art2@test.com",
    biography:
      "Hey guys, my name is Clay Smith and I make clay sculptures. Let me know if you want me to make you a one-of-a-kind custom piece!",
    twitter: "@art_grl_2",
    password: "test1234",
  },
  {
    name: "Loren Elizabeth",
    email: "art3@test.com",
    biography:
      "Hey y'all, I'm Loren and I design jpegs for phone and web backgrounds.",
    twitter: "@art3ist",
    password: "test1234",
  },
];

const seedArtist = () => Artist.bulkCreate(artistData);

module.exports = seedArtist;
