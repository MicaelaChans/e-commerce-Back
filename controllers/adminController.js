const Admin = require("../models/Admin");
const User = require("../models/User");

const adminController = {
  index: async (req, res) => {
    const admins = await Admin.find();
    res.json(admins);
  },
};

module.exports = adminController;
