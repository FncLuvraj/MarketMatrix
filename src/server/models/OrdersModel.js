const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdersSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    mode: {
        type: String,
        required: true,
        enum: ['buy', 'sell']
    }
});

const OrdersModel = mongoose.model('Order', OrdersSchema);

module.exports = OrdersModel;