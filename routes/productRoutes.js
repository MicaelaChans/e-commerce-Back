const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();

productRouter.get("/", productController.index);
<<<<<<< Updated upstream
productRouter.get("/:id", productController.show);

=======
productRouter.get("/:category", productController.findByCat);
productRouter.get("/:id", productController.show);
>>>>>>> Stashed changes
module.exports = productRouter;
