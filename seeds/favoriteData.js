const { Favorite } = require("../models");

const favData = [
    {
        user_id: 1,
        artist_id: [1, 2],
        art_id: [1,2,3],
    },
    {
        user_id: 2,
        artist_id: [1, 3],
        art_id: [1,2,3],
    },
    {
        user_id: 3,
        artist_id: 2,
        art_id: 1,
    },
    {
        user_id: 4,
        artist_id: [1, 2, 3],
        art_id: 3,
    }
];

const seedFav = () => Favorite.bulkCreate(artData);

module.exports = seedFav;
