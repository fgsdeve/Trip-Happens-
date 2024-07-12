//Mongoose model for itineraries that references a user, a title, activities, and a date. This will be associated with a specific user.
//Fixme: May need to change the ItinerarySchema based on what we are looking to do(do we want a list of activities, etc?)
const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    activities: [{type: String}],
    date: {type: Date, required: true},
});

module.exports = mongoose.model('Itinerary', ItinerarySchema);