const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created: Date,
    updated: Date,
});

module.exports = mongoose.model('User', UserSchema); // Export the User model
