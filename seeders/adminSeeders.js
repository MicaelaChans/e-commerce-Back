const Admin = require("../models/Admin");
const mongoose = require("../dbInitialSetup");

async function adminSeeders() {
  await Admin.collection.drop();

  const admins = [];
  const admin = new Admin({
    firstname: "Admin",
    lastname: "Admin",
    username: "admin",
    password: "admin",
    email: "admin@gmail.com",
  });

  admins.push(admin);
  console.log("Admin Seeder complete");
  return await Admin.insertMany(admins);
}

module.exports = adminSeeders;
