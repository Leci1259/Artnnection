const { User } = require("../models");

const userData = [
  {
    name: "Andrew Roddy",
    email: "test1@email.com",
    password: "test1234"
  },
  {
    name: "Lesiana Reid",
    email: "test2@email.com",
    password: "test1234"
  },
  {
    name: "Parker Satterfield",
    email: "test3@email.com",
    password: "test1234"
  },
  {
    name: "Noah Schmidt",
    email: "test4@email.com",
    password: "test1234"
  },
  {
    name: "John Smith",
    email: "test5@email.com",
    password: "test1234"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
