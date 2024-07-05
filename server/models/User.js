//Creating a mongoose model for MongoDB for User which requires name, email(unique), and password.
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);