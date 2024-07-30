const {Schema} = require('mongoose');

const HoldingsSchema = new Schema({

    name:String, 
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String
})

module.exports = {HoldingsSchema};

//when we will create a new instance of the schema we will compare it against the existing schema so that 
//we have all the value or not , also at the time when we are retrieving information from the database