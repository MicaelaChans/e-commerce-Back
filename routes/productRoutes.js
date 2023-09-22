const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", productController.index);
router.get("/:id", productController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  checkRole("admin"),
  productController.create
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  checkRole("admin"),
  productController.update
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  checkRole("admin"),
  productController.destroy
);

module.exports = router;
