const Order = require("../models/Order");
const mongoose = require("../dbInitialSetup");
const userSeeders = require("./userSeeders");

async function orderSeeders() {
  await Order.collection.drop();

  const users = await userSeeders();

  const orders = [];
  const order1 = new Order({
    state: "Entregado",
    user: users[0],
  });
  orders.push(order1);
  users[0].orders.push(order1.id);
  await users[0].save();

  const order2 = new Order({
    state: "En Camino",
    user: users[0],
  });
  orders.push(order2);
  users[0].orders.push(order2.id);
  await users[0].save();

  const order3 = new Order({
    state: "Pagado",
    user: users[0],
  });
  orders.push(order3);
  users[0].orders.push(order3.id);
  await users[0].save();

  const order4 = new Order({
    state: "Sin pagar",
    user: users[0],
  });
  orders.push(order4);
  users[0].orders.push(order4.id);
  await users[0].save();

  console.log("Order Seeder complete");
  return await Order.insertMany(orders);
}

module.exports = orderSeeders;
