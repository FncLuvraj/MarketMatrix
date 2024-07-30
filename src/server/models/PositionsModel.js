const mongoose = require('mongoose');
const { Schema } = mongoose;

const PositionsSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    qty: {
        type: Number,
        required: true
    },
    avg: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    net: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    isLoss: {
        type: Boolean,
        required: true
    }
});

const PositionsModel = mongoose.model('Position', PositionsSchema);

module.exports = PositionsModel;