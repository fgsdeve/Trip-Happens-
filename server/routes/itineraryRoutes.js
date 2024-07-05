//
const express = require('express');
const router = express.Router();
const {getItineraries, createItinerary} = require('../controllers/itineraryController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getItineraries);
router.post('/', auth, createItinerary);

module.exports = router;
