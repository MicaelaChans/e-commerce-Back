const Admin = require("../models/Admin");
const mongoose = require("../dbInitialSetup");
const bcrypt = require("bcryptjs");

async function adminSeeders() {
  await Admin.collection.drop();

  const admins = [];

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash("admin", saltRounds);

  const admin = new Admin({
    firstname: "Admin",
    lastname: "Admin",
    username: "admin",
    password: hashedPassword,
    email: "admin@gmail.com",
  });

  admins.push(admin);
  console.log("Admin Seeder complete");
  return await Admin.insertMany(admins);
}

module.exports = adminSeeders;
