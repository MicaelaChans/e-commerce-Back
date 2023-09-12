const Category = require("../models/Category");

const categoryController = {
  index: async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
  },
  show: async (req, res) => {
    const category = await Category.findById(req.params.id).populate("products");
    return res.json(category);
  },
};

module.exports = categoryController;
