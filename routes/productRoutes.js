const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();

productRouter.get("/", productController.index);
productRouter.get("/:id", productController.show);

module.exports = productRouter;
