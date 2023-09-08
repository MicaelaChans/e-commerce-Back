const Category = require("../models/Category");

const categoryController = {
  index: async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
  },
};

module.exports = categoryController;
