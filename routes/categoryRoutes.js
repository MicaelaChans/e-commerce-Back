const express = require("express");
const categoryController = require("../controllers/categoryControlller");
const router = express.Router();

router.get("/", categoryController.index);
router.get("/:id", categoryController.show);

module.exports = router;
