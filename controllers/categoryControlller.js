const Category = require("../models/Category");

const categoryController = {
  index: async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
  },

  create: async (req, res) => {
    try {
      const { name, description, image } = req.body;
      const category = new Category({
        name,
        description,
        image,
      });
      await category.save();
      return res.json(category);
    } catch (error) {
      console.log("Error creating category", error);
      return res.status(500).json({ error: "Error creating category" });
    }
  },

  show: async (req, res) => {
    const category = await Category.findById(req.params.id).populate(
      "products"
    );
    return res.json(category);
  },

  update: async (req, res) => {},

  destroy: async (req, res) => {
    try {
      const categoryId = req.body.categoryId;
      await Category.findByIdAndRemove(categoryId);
      return res.json("Category Deleted");
    } catch (error) {
      console.log("Error al eliminar category", error);
    }
  },
};

module.exports = categoryController;
