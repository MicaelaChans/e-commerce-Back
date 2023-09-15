const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/tokens", authController.tokens);
router.post("/register", authController.register);
router.post("/logout", authController.logout);

module.exports = router;
