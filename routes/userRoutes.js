const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");

//router.get("/", userController.index);

userRouter.get(
  "/:id",
  //checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  userController.show
);
userRouter.get(
  "/:id/orders",
  //checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  userController.showOrders
);

userRouter.patch("/:id", userController.update);
userRouter.delete("/:id", userController.destroy);

module.exports = userRouter;
