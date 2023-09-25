const Order = require("../models/Order");
const mongoose = require("../dbInitialSetup");
const userSeeders = require("./userSeeders");

async function orderSeeders() {
  await Order.collection.drop();

  const users = await userSeeders();

  const orders = [];
  const order1 = new Order({
    user: users[0],
    state: "Delivered",
  });
  orders.push(order1);
  users[0].orders.push(order1.id);
  await users[0].save();

  console.log("Order Seeder complete");
  return await Order.insertMany(orders);
}

module.exports = orderSeeders;
