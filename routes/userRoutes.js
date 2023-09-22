const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const { expressjwt: checkJwt } = require("express-jwt");

router.get(
  "/",
 
  userController.index
);
router.get(
  "/:id",
  
  userController.show
);
router.get(
  "/:id/orders",
  
  userController.showOrders
);
router.patch(
  "/:id",
 
  userController.update
);
router.delete(
  "/:id",
 
  userController.destroy
);

module.exports = router;
