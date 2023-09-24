const User = require("../models/User");
const mongoose = require("../dbInitialSetup");
const bcrypt = require("bcryptjs");

async function userSeeders() {
  await User.collection.drop();

  const users = [];
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash("user", saltRounds);

  const user = new User({
    firstname: "Maria",
    lastname: "Perez",
    password: hashedPassword,
    email: "maria.perez@gmail.com",
    phone: "093827499",
    address: "Domingo Aramburú 2134",
  });

  users.push(user);
  console.log("User Seeder complete");
  return await User.insertMany(users);
}

module.exports = userSeeders;
