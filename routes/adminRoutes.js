const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

//router.post("/login", adminController.login);

router.get("/", adminController.index);
router.post("/", adminController.create);
router.get("/:id", adminController.show);
router.patch("/:id", adminController.update);
router.delete("/:id", adminController.destroy);

router.post("/logout", adminController.logout);

module.exports = router;
