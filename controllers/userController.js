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

  update: async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedUserData = req.body;

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        updatedUserData,
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      return res.json(updatedUser);
    } catch (error) {
      console.log("Error al actualizar el usuario", error);
      return res
        .status(500)
        .json({ message: "Error al actualizar el usuario" });
    }
  },

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
