const express = require("express");
const orderController = require("../controllers/orderController");
const orderRouter = express.Router();

orderRouter.get("/", orderController.index);
orderRouter.delete("/:id", orderController.destroy);

module.exports = orderRouter;
