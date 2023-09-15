const express = require("express");
const adminController = require("../controllers/adminController");
const authController = require("../controllers/authController");
const router = express.Router();

router.get("/", adminController.index);
//router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;
