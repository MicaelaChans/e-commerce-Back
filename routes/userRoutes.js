const express = require("express");
const userController = require("../controllers/userContoller");
const userRouter = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");

//userRouter.get("/", userController.index);

userRouter.get(
  "/",
  //checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  userController.show
);
userRouter.get(
  "/:id/orders",
  //checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  userController.showOrders
);

module.exports = userRouter;
