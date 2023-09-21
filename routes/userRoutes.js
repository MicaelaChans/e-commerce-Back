const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", userController.index);

router.get(
  "/:id",
  //checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  userController.show
);
router.get(
  "/:id/orders",
  //checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  userController.showOrders
);

router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
