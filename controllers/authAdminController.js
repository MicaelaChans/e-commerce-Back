const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authAdminController = {
    tokensAdmin: async (req, res) => {
        const { username, password } = req.body;
        console.log("Datos de entrada:", username, password);
        if (!username || !password) {
            return res
                .status(400)
                .json({ error: "Please provide both username and password." });
        }
        const admin = await Admin.findOne({ username: req.body.username });

        if (!admin) {
            return res.status(401).json({ error: "User not found." });
        }

        const validatePassword = await bcrypt.compare(password, admin.password);
        if (!validatePassword) {
            return res.status(401).json({ error: "Invalid password." });
        }

        const token = jwt.sign(
            { sub: admin.id, username: admin.username },
            process.env.JWT_SECRET
        );
        //Respondo con el token a la llamada
        return res.status(200).json({ token });
    },

    logout: async (req, res) => {
        res.json("Entraste en Login (backend)");
        return console.log("Admin hizo logout!");
    },
};

module.exports = authAdminController;
