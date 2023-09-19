const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/tokens", authController.tokens);
router.post("/register", authController.register);
router.post("/logout", authController.logout);
router.post("/update-password", authController.updatePassword);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);

module.exports = router;
