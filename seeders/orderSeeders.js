const Order = require("../models/Order");
const mongoose = require("../dbInitialSetup");
const userSeeders = require("./userSeeders");

async function orderSeeders() {
  await Order.collection.drop();

  const users = await userSeeders();

  const orders = [];
  const order = new Order({
    state: "Pagado",
    user: users[0],
  });

  orders.push(order);
  users[0].orders.push(order.id);
  await users[0].save();
  
  console.log("Order Seeder complete");
  return await Order.insertMany(orders);
}

module.exports = orderSeeders;