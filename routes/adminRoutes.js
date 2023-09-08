const express = require("express");
const adminController = require("../controllers/adminController");
const adminRouter = express.Router();

adminRouter.get("/", adminController.index);

module.exports = adminRouter;
