const User = require("../models/User");
const Order = require("../models/Order");

const userController = {
  index: async (req, res) => {
    try {
      const users = await User.find().populate("orders");
      return res.json(users);
    } catch (error) {
      console.error("Error in userController.index:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  show: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId).populate("orders");
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
      return res.json(user);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while fetching the user." });
    }
  },

  showOrders: async (req, res) => {
    const userId = req.params.id;
    try {
      const orders = await Order.find({ user: userId }).populate("user");
      res.json(orders);
    } catch (error) {
      res.status(500).send({ error: "Error fetching orders for the user." });
    }
  },

  update: async (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
    try {
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
      return res
        .status(500)
        .json({ message: "Error al actualizar el usuario" });
    }
  },

  destroy: async (req, res) => {
    const userId = req.params.id;
    try {
      await User.findByIdAndRemove(userId);
      return res.json("User deleted successfully");
    } catch (error) {
      res.status(500).send({ error: "Error deleting user." });
    }
  },
};

module.exports = userController;
