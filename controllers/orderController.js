const Order = require("../models/Order");
const User = require("../models/User");

const orderController = {
  index: async (req, res) => {
    const orders = await Order.find().populate("user").populate("products");
    return res.json(orders);
  },

  create: async (req, res) => {
    const user = await User.findById(req.auth.id);
    try {
      const order = await Order.create({
        products: req.body.product,
        user: user._id,
      });
      user.orders.push(order);
      user.save();
      return res.json({ msg: "Order creada" });
    } catch (error) {
      console.log("Error al obtener los datos", error);
    }
  },

  show: async (req, res) => {
    const order = await Order.findById(req.params.id);
    return res.json(order);
  },

  update: async (req, res) => {},

  destroy: async (req, res) => {
    try {
      const orderId = req.body.orderId;
      await Order.findByIdAndRemove(orderId);
      return res.json("Order borrada");
    } catch (error) {
      console.log("Error al eliminar order", error);
    }
  },
};

module.exports = orderController;
