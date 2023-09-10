const Order = require("../models/Order");
const Product = require("../models/Product");

const orderController = {
  index: async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
  },

  destroy: async (req, res) => {
    try {
      const productId = req.body.productId;
      await Product.findByIdAndRemove(productId);
      res.json("Product borrado");
    } catch (error) {
      console.log("Error al eliminar product", error);
    }
  },
};

module.exports = orderController;
