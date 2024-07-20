//Creating a mongoose model for MongoDB for User which requires name, email(unique), and password.
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next ();
    const salt = await bcrypt.gensalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', UserSchema);