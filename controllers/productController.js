const Product = require("../models/Product");

const productController = {
  index: async (req, res) => {
    const products = await Product.find();
    res.json(products);
  },
};

module.exports = productController;
