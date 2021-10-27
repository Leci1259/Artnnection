const { User } = require("../models");

const userData = [
  {
    name: "Andrew Roddy",
    email: "test1@email.com",
  },
  {
    name: "Lesiana Reid",
    email: "test2@email.com",
  },
  {
    name: "Parker Satterfield",
    email: "test3@email.com",
  },
  {
    name: "Noah Schmidt",
    email: "test4@email.com",
  },
  {
    name: "John Smith",
    email: "test5@email.com",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
