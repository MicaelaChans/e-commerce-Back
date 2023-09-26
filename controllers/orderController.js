const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");

const orderController = {
  index: async (req, res) => {
    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .populate("user")
      .populate("products");
    console.log(orders);
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

        return res.json({ message: "Nueva orden creada", orderId: order._id });
      }

      return res.json({ message: "Productos agregados a la orden existente" });
    } catch (error) {
      console.error("Error al crear la orden:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  show: async (req, res) => {
    const order = await Order.findById(req.params.id);
    console.log(order);
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
        return res.status(404).json({ error: "Orden no encontrada" });
      }
      for (let i = 0; i < order.products.length; i++) {
        let product = await Product.findById(order.products[i].id);
        product.stock = product.stock - 1;
        await product.save();
      }
      return res.json({ message: "Orden actualizada correctamente", order });
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  destroy: async (req, res) => {
    const prodId = req.params.id;
    const orderId = req.body.orderId;
    const order = await Order.findById(orderId);
    const product = await Product.findById(prodId);

    let i = 0;
    while (i < order.products.length) {
      if (order.products[i]._id == prodId) {
        order.products.splice(i, 1);
      } else {
        ++i;
      }
    }
    order.save();

    return res.json("producto borrado de esta roden");
  },
};

module.exports = orderController;
