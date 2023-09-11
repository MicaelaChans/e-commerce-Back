const Product = require("../models/Product");
const Category = require("../models/Category");

const productController = {
  index: async (req, res) => {
    const products = await Product.find().populate("category");
    return res.json(products);
  },
<<<<<<< Updated upstream
  show: async (req, res) => {
    const product = await Product.findById(req.params.id);
    return res.json(product);
=======
  findByCat: async (req, res) => {
    try {
      const paramsCat = req.params.category;
      const category = await Category.findOne({ name: paramsCat }).populate(
        "products"
      );
      const products = [];
      for (let i = 0; i < category.products.length; i++) {
        products.push(category.products[i]);
      }
      return res.json(products);
    } catch (error) {
      return res.json("Error en parámetros de búsqueda");
    }
  },
  show: (req, res) => {
    console.log("llegamos a show");
>>>>>>> Stashed changes
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
