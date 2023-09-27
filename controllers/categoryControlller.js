const Category = require("../models/Category");

const categoryController = {
  index: async (req, res) => {
    try {
      const categories = await Category.find();
      return res.json(categories);
    } catch (error) {
      console.error("Error in categoryController.index:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  show: async (req, res) => {
    try {
      const categoryId = req.params.id;
      const category = await Category.findById(categoryId).populate("products");
      return res.json(category);
    } catch (error) {
      console.error("Error in categoryController.show:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  destroy: async (req, res) => {
    try {
      const categoryId = req.body.categoryId;
      await Category.findByIdAndRemove(categoryId);
      return res.json("Category deleted");
    } catch (error) {
      console.log("Error deleting category:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = categoryController;
