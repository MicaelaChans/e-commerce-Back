const mongoose = require("../dbInitialSetup");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  image: String,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

categorySchema.set("toJSON", { virtuals: true });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
