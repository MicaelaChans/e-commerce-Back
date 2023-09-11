const Product = require("../models/Product");
const Category = require("../models/Category");

const productController = {
  index: async (req, res) => {
    const products = await Product.find().populate("category");
    return res.json(products);
  },
  show: (req, res) => {
    console.log("llegamos a show");
  },
};

module.exports = productController;

//  show: async (req, res) => {
//    console.log("llegamos");
//    try {
//      const product = await Product.findById(req.params.id);
//      if (!product) {
//        return res.status(404).json({ message: "Producto no encontrado" });
//      }
//      res.json(product);
//    } catch (error) {
//      return res.json("Error en parámetros de búsqueda");
//    }
