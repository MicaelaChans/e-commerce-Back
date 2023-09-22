const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), checkRole('admin'), adminController.index);
router.post("/", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), checkRole('admin'), adminController.create);
router.get("/:id", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), checkRole('admin'), adminController.show);
router.patch("/:id", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), checkRole('admin'), adminController.update);
router.delete("/:id", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), checkRole('admin'), adminController.destroy);

module.exports = router;
