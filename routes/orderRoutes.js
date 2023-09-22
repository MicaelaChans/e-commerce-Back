const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),  orderController.index);
router.post("/", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),  orderController.create);
router.get("/:id", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),  orderController.show);
router.patch("/:id", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),  orderController.update);
router.delete("/:id", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),  orderController.destroy);

module.exports = router;
