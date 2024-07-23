const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    activities: [{ type: String }],
    date: { type: Date, required: true },
});

module.exports = mongoose.model('Itinerary', ItinerarySchema);
