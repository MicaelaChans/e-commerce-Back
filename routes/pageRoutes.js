const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageContoller");

router.get("/", pageController.index);

module.exports = router;
