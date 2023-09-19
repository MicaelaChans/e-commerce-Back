const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const mailer = require('../mailer');

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
    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword)
      return res.status(401).json({ error: "Wrong credentials..." });

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
    const adress = req.body.adress;
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
        adress: adress
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

  updatePassword: async (req, res) => {
    const userId = req.body.userId;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const validatePassword = await bcrypt.compare(oldPassword, user.password);

    if (!validatePassword) {
      return res.status(401).json({ error: "Wrong old password." });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;

    await user.save();

    return res.status(200).json({ message: "Password updated successfully!" });
  },

  forgotPassword: async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ error: "No user found with this email address." });
    }

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    const resetLink = `http://localhost:5173/reset-password-page?token=${resetToken}`;

    mailer.sendMail({
        from: 'maurodenava01@gmail.com',
        to: email,
        subject: 'Password Reset',
        html: `<h2>Hello, ${user.firstname} ${user.lastname}</h2>
               <p>Click the following link to reset your password:</p>
               <a href="${resetLink}">${resetLink}</a>`
    }, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: 'Failed to send email.' });
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).json({ message: 'Password reset link sent to email.' });
        }
    });
},

  resetPassword: async (req, res) => {
    const { token, newPassword } = req.body;

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ error: "Invalid or expired token." });
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password successfully reset." });
  },
};

module.exports = authController;
