const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();

productRouter.get("/", productController.index);
productRouter.get("/:category", productController.findByCat)

module.exports = productRouter;
