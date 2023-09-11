const Product = require("../models/Product");
const Category = require("../models/Category");

const productController = {
  index: async (req, res) => {
    const products = await Product.find().populate("category");
    return res.json(products);
  },
  show: async (req, res) => {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },
};

module.exports = productController;

