const express = require("express");
const authAdminController = require("../controllers/authAdminController");
const router = express.Router();

router.post("/tokens/admin", authAdminController.tokensAdmin);
router.post("/logout", authAdminController.logout);

module.exports = router;
