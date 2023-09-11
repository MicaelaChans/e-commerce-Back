const Product = require("../models/Product");
const Category = require("../models/Category")

const productController = {
  index: async (req, res) => {
    const products = await Product.find().populate("category");
    return res.json(products);
  },
  show: async (req, res) =>{
    return res.json("Holis");
  },
};

module.exports = productController;
