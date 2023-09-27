const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");

const orderController = {
  index: async (req, res) => {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .populate("user")
      .populate("products");
    return res.json(orders);
  },

  create: async (req, res) => {
    try {
      const userId = req.body.user.id;
      const cart = req.body.cart;
      const user = await User.findById(userId);

      const existingUnpaidOrder = await Order.findOne({
        user: user._id,
        state: "Pending",
      });
      if (existingUnpaidOrder) {
        for (let i = 0; i < cart.length; i++) {
          const prod = await Product.findById(cart[i].id);
          existingUnpaidOrder.products.push(prod);
        }
        await existingUnpaidOrder.save();
      } else {
        const order = new Order({
          user: user._id,
          products: [],
          state: "Pending",
        });

        for (let i = 0; i < cart.length; i++) {
          const prod = await Product.findById(cart[i].id);
          order.products.push(prod);
          prod.orders.push(order);
          await prod.save();
        }

        await order.save();
        user.orders.push(order._id);

        return res.json({ message: "New order created", orderId: order._id });
      }

      return res.json({ message: "Error updating order" });
    } catch (error) {
      console.error("Error at create order:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  show: async (req, res) => {
    const order = await Order.findById(req.params.id);
    return res.json(order);
  },

  update: async (req, res) => {
    const orderId = req.params.id;
    try {
      const order = await Order.findByIdAndUpdate(orderId, {
        state: "Paid",
      }).populate("products");
      order.save();
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      for (let i = 0; i < order.products.length; i++) {
        let product = await Product.findById(order.products[i].id);
        product.stock = product.stock - 1;
        await product.save();
      }
      return res.json({ message: "Orden updated", order });
    } catch (error) {
      console.error("Error updating the order.:", error);
      return res.status(500).json({ error: "Internal error" });
    }
  },

  destroy: async (req, res) => {
    try {
      const prodId = req.params.id;
      const orderId = req.body.orderId;

      const order = await Order.findById(orderId);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }

      const productIndex = order.products.findIndex(
        (product) => product._id == prodId
      );

      if (productIndex === -1) {
        return res
          .status(404)
          .json({ error: "Product not found in the order" });
      }

      order.products.splice(productIndex, 1);

      await order.save();

      return res.json("Product removed from the order");
    } catch (error) {
      console.error("Error in destroy function:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = orderController;
