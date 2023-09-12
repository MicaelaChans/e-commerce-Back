const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authController = {
  tokens: async (req, res) => {
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
    const firstname = req.body.firstname; 
    const lastname = req.body.lastname; 
    const email = req.body.email; 
    const phone = req.body.phone; 
    const password = await bcrypt.hash(req.body.password, 10);  
    const checkEmail = await User.findOne({email:email});
    const checkPhone = await User.findOne({phone:phone});
    if(checkEmail){
      return res.json("existent email already");
    } else if(checkPhone){
      return res.json("existent phone already");
    } else{
      const user = await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        password: password,     
      });  
      if(user){
        return res.json("usuario creado")
      }else{
        return res.json("error en la creacion del usuario")
      }
    }   
  }
};

module.exports = authController;
