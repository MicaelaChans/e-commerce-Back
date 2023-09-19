const User = require("../models/User");

const userController = {
  index: async (req, res) => {
    return res.send("Funcionando...");
  },

  show: async (req, res) => {
    const users = await User.find().populate("orders");
    return res.json(users);
  },

  showOrders: async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    return res.json(user);
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
