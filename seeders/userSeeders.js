const User = require("../models/User");
const mongoose = require("../dbInitialSetup");

async function userSeeders() {
await User.collection.drop();

  const users = [];
  const user = new User({
   firstname: "Martin",
   lastname: "Gestido",
   password: "clave",
   email: "gestidomartin@gmail.com",
   adress: "Caraguatay 2060",
   phone: "099852739"
  });

  users.push(user);
  

  
  console.log("User Seeder complete");
  return await User.insertMany(users);
}

module.exports = userSeeders;