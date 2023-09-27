const express = require("express");
const categoryController = require("../controllers/categoryControlller");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", categoryController.index);
router.get("/:id", categoryController.show);
router.delete("/:id", checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),  categoryController.destroy);

module.exports = router;
