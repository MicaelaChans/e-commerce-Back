const express = require("express");
const categoryController = require("../controllers/categoryControlller");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", categoryController.index);
router.get("/:id", categoryController.show);
router.post("/", categoryController.create);
router.patch("/:id", categoryController.update);
router.delete("/:id", categoryController.destroy);

module.exports = router;
