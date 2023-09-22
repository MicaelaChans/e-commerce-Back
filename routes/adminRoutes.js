const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/",  adminController.index);
router.post("/",  adminController.create);
router.get("/:id",  adminController.show);
router.patch("/:id",  adminController.update);
router.delete("/:id",  adminController.destroy);

module.exports = router;
