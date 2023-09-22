const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", productController.index);
router.get("/:id", productController.show);
router.post(
  "/",
  
  productController.create
);
router.patch(
  "/:id",
 
  productController.update
);
router.delete(
  "/:id",

  productController.destroy
);

module.exports = router;
