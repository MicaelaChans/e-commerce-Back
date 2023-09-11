const User = require("../models/User");
const jwt = require("jsonwebtoken");

const authController = {
  tokens: async (req, res) => {
    console.log(req.body);
    //Verificamos credenciales
    //Verificar usuario en DB
    const user = await User.findOne({ username: req.body.username });

    if (!user) return res.json({ error: "Wrong credentials..." });

    //Verificar contraseña (la contraseña en db hace match con la recibida)
    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) return res.json({ error: "Wrong credentials..." });

    //Genero token
    const token = jwt.sign(
      { sub: user.id, username: user.username },
      process.env.JWT_SECRET
    );
    //Respondo con el token a la llamada
    return res.json({ token });
  },
  register: async (req,res) => {
    return res.json("asdas")
  }
};

module.exports = authController;
