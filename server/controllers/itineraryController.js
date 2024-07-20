// controllers/itineraryController.js
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

// Get a single itinerary
const getItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    res.json(itinerary);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create a new itinerary
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

// Update an itinerary
const updateItinerary = async (req, res) => {
  const { title, activities, date } = req.body;

  try {
    let itinerary = await Itinerary.findById(req.params.id);

    if (!itinerary) {
      return res.status(404).json({ msg: 'Itinerary not found' });
    }

    itinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      { $set: { title, activities, date } },
      { new: true }
    );

    res.json(itinerary);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete an itinerary
const deleteItinerary = async (req, res) => {
  try {
    await Itinerary.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Itinerary removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  getItineraries,
  getItinerary,
  createItinerary,
  updateItinerary,
  deleteItinerary,
};
