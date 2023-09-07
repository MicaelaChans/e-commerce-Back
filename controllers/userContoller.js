const User = require("../models/User");

const userController = {
  index: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },
};

module.exports = userController;
