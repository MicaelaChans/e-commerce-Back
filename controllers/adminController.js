const Admin = require("../models/Admin");

const adminController = {
  index: async (req, res) => {
    const admins = await Admin.find();
    res.json(admins);
  },
};

module.exports = adminController;
