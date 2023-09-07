const mongoose = require("../dbInitialSetup");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  username: String,
  password: String,
  email: String,
  direction: String,
  telefone: Number,
  role: Number,
  order: { cartId },
  purchases: [{ cart }],
  rating: { productId },
});

userSchema.set("toJSON", { virtuals: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
