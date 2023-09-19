const Product = require("../models/Product");
const Category = require("../models/Category");

const productController = {
  index: async (req, res) => {
    const products = await Product.find().populate("category");
    return res.json(products);
  },

  create: async (req, res) => {
    /*const product = await Product.create({
      name: name,
      description: description,
      image: "",
      stock: stock,
      price: price,
      otherProperties: otherProperties,
      rating: rating,
      category: category,
      orders: orders,
    });*/
  },

  show: async (req, res) => {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  update: async (req, res) => {},

  destroy: async (req, res) => {
    try {
      const productId = req.body.productId;
      await Product.findByIdAndRemove(productId);
      return res.json("Product borrado");
    } catch (error) {
      console.log("Error al eliminar product", error);
    }
  },
};

module.exports = productController;
