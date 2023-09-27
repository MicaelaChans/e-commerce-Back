const Product = require("../models/Product");

const productController = {
  index: async (req, res) => {
    const products = await Product.find().populate("category");
    return res.json(products);
  },

  create: async (req, res) => {
    try {
      const {
        name,
        description,
        image,
        stock,
        price,
        category,
        rating,
        otherProperties,
      } = req.body;
      const product = new Product({
        name,
        description,
        image,
        stock,
        price,
        rating,
        category,
        otherProperties,
        orders: [],
      });
      await product.save();
      return res.json(product);
    } catch (error) {
      console.log("Error al crear product", error);
      return res.status(500).json({ error: "Error creating product" });
    }
  },

  show: async (req, res) => {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  update: async (req, res) => {
    const productId = req.params.id;
    const { rating } = req.body;

    const product = await Product.findById(productId);
    product.rating.push(rating);
    await product.save();
    return res.json("updatedProduct");
  },

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
