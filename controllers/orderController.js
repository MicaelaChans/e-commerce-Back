const Order = require("../models/Order");

const orderController = {
  index: async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
  },
};

module.exports = orderController;
