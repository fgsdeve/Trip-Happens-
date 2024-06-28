const Itinerary = require('../models/Itinerary');

// Get all itineraries
const getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ user: req.user.id });
    res.json(itineraries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create new itinerary
const createItinerary = async (req, res) => {
  const { title, activities, date } = req.body;

  try {
    const newItinerary = new Itinerary({
      user: req.user.id,
      title,
      activities,
      date,
    });

    const itinerary = await newItinerary.save();
    res.json(itinerary);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { getItineraries, createItinerary };
