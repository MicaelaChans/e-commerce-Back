const mongoose = require("../dbInitialSetup");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
});

adminSchema.set("toJSON", { virtuals: true });

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
