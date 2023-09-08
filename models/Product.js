const mongoose = require("../dbInitialSetup");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  image: String,
  stock: Number,
  price: Number,
  rating: [],
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

productSchema.set("toJSON", { virtuals: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
