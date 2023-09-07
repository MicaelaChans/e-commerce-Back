const express = require("express");
const pageRouter = express.Router();
const pageController = require("../controllers/pageContoller");

pageRouter.get("/", pageController.index);

module.exports = pageRouter;
