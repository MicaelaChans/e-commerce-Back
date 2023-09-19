const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authController = {
  tokens: async (req, res) => {
    const { email, password } = req.body;
    //Validacion básica
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide both email and password." });
    }
    //Verificamos credenciales
    //Verificar usuario en DB
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(401).json({ error: "Wrong credentials..." });

    //Verificar contraseña (la contraseña en db hace match con la recibida)
    const validatePassword =  await bcrypt.compare(password, user.password);

    if (!validatePassword) return res.status(401).json({ error: "Wrong credentials..." });

    //Genero token
    const token = jwt.sign(
      { sub: user.id, email: user.email },
      process.env.JWT_SECRET
    );
    //Respondo con el token a la llamada
    return res.status(200).json({ token });
  },

  register: async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = await bcrypt.hash(req.body.password, 10);
    const checkEmail = await User.findOne({ email: email });
    const checkPhone = await User.findOne({ phone: phone });
    if (checkEmail) {
      return res.json("existent email already");
    } else if (checkPhone) {
      return res.json("existent phone already");
    } else {
      const user = await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        password: password,
      });
      if (user) {
        return res.json("usuario creado");
      } else {
        return res.json("error en la creacion del usuario");
      }
    }
  },

  logout: async (req, res) => {
    res.json("Entraste en Login (backend)");
    return console.log("Usuario hizo logout!");
  },
};

module.exports = authController;
