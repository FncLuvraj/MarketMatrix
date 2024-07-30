const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
    // confirmPassword: {
    //     type: String,
    //     required: true
    // }
});

// Create the model from the schema
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;