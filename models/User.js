const mongoose = require("../dbInitialSetup");
const Schema = mongoose.Schema;
//const bcrypt = require('bcryptjs');


const userSchema = new Schema({
  firstname: String,
  lastname: String,
  password: String,
  email: String,
  adress: String,
  phone: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  resetToken: String,
  resetTokenExpire: Date,
});

userSchema.set("toJSON", { virtuals: true });
/*
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});*/

const User = mongoose.model("User", userSchema);

module.exports = User;
