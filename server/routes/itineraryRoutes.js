// routes/itineraryRoutes.js
const express = require('express');
const router = express.Router();
const {
  getItineraries,
  getItinerary,
  createItinerary,
  updateItinerary,
  deleteItinerary,
} = require('../controllers/itineraryController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getItineraries);
router.get('/:id', auth, getItinerary);
router.post('/', auth, createItinerary);
router.put('/:id', auth, updateItinerary);
router.delete('/:id', auth, deleteItinerary);

module.exports = router;
