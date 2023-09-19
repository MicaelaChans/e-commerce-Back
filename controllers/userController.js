const User = require("../models/User");
const Order = require("../models/Order");

const userController = {
  index: async (req, res) => {
    return res.send("Funcionando...");
  },

  show: async (req, res) => {
    const users = await User.find().populate("orders");
    return res.json(users);
  },

  showOrders: async (req, res) => {
    const userId = req.params.id;
    try {
      const orders = await Order.find({ user: userId });
      res.json(orders);
    } catch (error) {
      res.status(500).send({ error: "Error fetching orders for the user." });
    }
  },

  update: async (req, res) => {},

  destroy: async (req, res) => {
    try {
      const userId = req.body.userId;
      await User.findByIdAndRemove(userId);
      return res.json("User borrado");
    } catch (error) {
      console.log("Error al eliminar user", error);
    }
  },
};

module.exports = userController;
