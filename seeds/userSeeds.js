const { User } = require("../models");

const userData = [
  {
    username: "John",
    email: "john@gmail.com",
    password: "john123",
  },
  {
    username: "Bob",
    email: "bob@gmail.com",
    password: "bobmob123",
  },
  {
    username: "Adam",
    email: "adam@gmail.com",
    password: "adam123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;