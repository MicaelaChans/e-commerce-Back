const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const { expressjwt: checkJwt } = require("express-jwt");

router.get(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  checkRole("user"),
  userController.index
);
router.get(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  checkRole("user"),
  userController.show
);
router.get(
  "/:id/orders",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  checkRole("user"),
  userController.showOrders
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  checkRole("user"),
  userController.update
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  checkRole("user"),
  userController.destroy
);

module.exports = router;
