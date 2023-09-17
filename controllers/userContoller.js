const User = require("../models/User");

async function index(req, res) {
  return res.send("Funcionando...");
}

async function show(req, res) {
  const users = await User.find().populate("orders");
  return res.json(users);
}
async function showOrders(req, res) {
  const id = req.params.id;
  const user = await User.findById(id);
  return res.json(user);
}

module.exports = {
  index,
  show,
  showOrders
};
