const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const { expressjwt: checkJwt } = require("express-jwt");


router.get("/",  orderController.index);
router.post("/",   orderController.create);
router.get("/:id",  orderController.show);
router.patch("/:id", orderController.update);
router.delete("/:id",  orderController.destroy);

module.exports = router;
