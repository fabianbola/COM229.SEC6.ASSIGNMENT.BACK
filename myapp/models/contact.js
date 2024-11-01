const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created: Date,
    updated: Date,
});

const contactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
});

module.exports = mongoose.model('User', UserSchema); // Export the User model
module.exports = mongoose.model('contact', contactSchema); // Export the User model

