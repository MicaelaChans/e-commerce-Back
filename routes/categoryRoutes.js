const express = require("express");
const categoryController = require("../controllers/categoryControlller");
const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.index);


module.exports = categoryRouter;
