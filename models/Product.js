const mongoose = require("../dbInitialSetup");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  firstname: String,
  description: String,
  alchoolVol: Number,
  image: String,
  type: ["APA", "IPA", "0%", "pilsen", "porter"],
  size: ["330", "1000", "5000"],
  stock: Number,
  price: Number,
  rating: Number,
  sales: Number,
});

userSchema.set("toJSON", { virtuals: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
