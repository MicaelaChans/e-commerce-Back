const express = require("express");
const categoryController = require("../controllers/categoryControlller");
const router = express.Router();

router.get("/", categoryController.index);
router.get("/:id", categoryController.show);
router.post("/", categoryController.create);
router.patch("/:id", categoryController.update);
router.delete("/:id", categoryController.destroy);

module.exports = router;
