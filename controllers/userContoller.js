const User = require("../models/User");

async function index(req, res) {
  return res.send("Funcionando...");
}

async function show(req, res) {
  const users = await User.find();
  return res.json(users);
}

module.exports = {
  index,
  show,
};
