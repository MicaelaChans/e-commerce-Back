const express = require("express");
const categoryController = require("../controllers/categoryControlller");
const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.index);
categoryRouter.get("/:id", categoryController.show);


module.exports = categoryRouter;
