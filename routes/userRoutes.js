const express = require("express");
const userController = require("../controllers/userContoller");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");

//router.get("/", userController.index);

router.get(
  "/",
  //checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  userController.show
);
router.get(
  "/:id/orders",
  //checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  userController.showOrders
);

module.exports = router;
