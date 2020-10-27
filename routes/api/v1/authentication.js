const express = require("express");
const router = express.Router();
var authenticationController = require("../../../controllers/authentication_controller");

//routes
router.post("/create-session", authenticationController.createSession);

module.exports = router;
