const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminController = {
  index: async (req, res) => {
    const admins = await Admin.find();
    res.json(admins);
  },

  create: async (req, res) => {
    try {
      const { firstname, lastname, username, email, password } = req.body;
      const passwordHash = await bcrypt.hash(password, 10);
      const newAdmin = new Admin({
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: passwordHash,
      });
      const registeredAdmin = await newAdmin.save();
      console.log(newAdmin);

      jwt.sign(
        { id: registeredAdmin._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
        (err, token) => {
          if (err) return console.log(err);
          console.log({ token });
          return res.json(token);
        }
      );
      res.json(registeredAdmin);
      return console.log("Administrador  y token creados!");
    } catch (err) {
      console.log(err);
    }
  },

  show: async (req, res) => {
    const admin = await Admin.findById(req.params.id);
    return res.json(admin);
  },

  update: async (req, res) => {},

  destroy: async (req, res) => {
    try {
      const adminId = req.params.id;
      await Admin.findByIdAndRemove(adminId);
      return res.json({ message: "Admin borrado exitosamente" });
    } catch (error) {
      console.log("Error al eliminar admin", error);
      return res.status(500).json({ error: "Error al eliminar admin" });
    }
  },
};

module.exports = adminController;
