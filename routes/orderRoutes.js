const express = require("express");
const orderController = require("../controllers/orderController");
const orderRouter = express.Router();

orderRouter.get("/", orderController.index);

module.exports = orderRouter;
