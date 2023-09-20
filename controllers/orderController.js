const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Product");

const orderController = {
  index: async (req, res) => {
    const orders = await Order.find().populate("user").populate("products");
    return res.json(orders);
  },

  create: async (req, res) => {
    const userId = req.body.user.id;
    const cart = req.body.cart;
    const user = await User.findById(userId);
    const order = await Order.create({
      user: user,
      products: [],
    });
    for (let i = 0; i < cart.length; i++) {
      let prod = await Product.findById(cart[i].id);
      order.products.push(prod);
      prod.orders.push(order);
      prod.save();
    }
    order.state = "Not Paid";
    order.save();
    user.orders.push(order);
    user.save();
    return res.json("orden creada");
    /*const user = await User.findById(req.auth.id);
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
    }*/
  },

  show: async (req, res) => {
    const order = await Order.findById(req.params.id);
    return res.json(order);
  },

  update: async (req, res) => {
    console.log(req.params.id);
   const orderId = req.params.id;
 try {
   const order = await Order.findByIdAndUpdate(orderId, { state: "Pagado" }, { new: true });
   if (!order) {
     return res.status(404).json({ error: "Orden no encontrada" });
   }
   return res.json({ message: "Orden actualizada correctamente", order });
 } catch (error) {
   console.error("Error al actualizar la orden:", error);
   return res.status(500).json({ error: "Error interno del servidor" });
 }
  },

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
