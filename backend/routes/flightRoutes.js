const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

// Example route
router.get('/', flightController.getAllFlights);

module.exports = router;
