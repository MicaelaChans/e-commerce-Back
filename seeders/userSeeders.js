const User = require("../models/User");
const mongoose = require("../dbInitialSetup");
const bcrypt = require('bcryptjs');

async function userSeeders() {
await User.collection.drop();

  const users = [];
  const user = new User({
   firstname: "Martin",
   lastname: "Gestido",
   password: bcrypt.hashSync("clave", 10),
   email: "gestidomartin@gmail.com",
   adress: "Caraguatay 2060",
   phone: "099852739"
  });

  users.push(user);
  

  
  console.log("User Seeder complete");
  return await User.insertMany(users);
}

module.exports = userSeeders;