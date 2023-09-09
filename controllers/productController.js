const Product = require("../models/Product");
const Category = require("../models/Category")

const productController = {
  index: async (req, res) => {
    const products = await Product.find().populate("category");
    return res.json(products);
  },
  findByCat: async (req,res) => {   
    try{
      const paramsCat = req.params.category; 
      const category = await Category.findOne({ name: paramsCat }).populate("products");
      const products = [];
      for(let i=0; i<category.products.length ; i++){
        products.push(category.products[i]);
      } 
      return res.json(products)
    } catch(error){
      return res.json("Error, en parametros de busqueda")
    }
   
  }
};

module.exports = productController;
