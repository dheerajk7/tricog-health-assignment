const express = require("express");
const router = express.Router();
var userController = require("../../../controllers/user_controller");

//routes
router.post("/create-user", userController.createUser);
router.get("/profile", userController.getUserProfile);

module.exports = router;
