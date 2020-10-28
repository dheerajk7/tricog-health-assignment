const express = require('express');
const router = express.Router();
const homeController = require('../controllers/api/v1/home_controller');

//routes
router.get('/', homeController.home);
router.use('/api', require('./api/index'));

module.exports = router;
