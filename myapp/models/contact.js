const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
});

module.exports = mongoose.model('contact', contactSchema); // Export the User model

