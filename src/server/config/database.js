const moongoose = require('mongoose');
require('dotenv').config();
moongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('Connected to MongoDB'))
.catch(e => {
    console.error("Error connecting to MongoDB", e);
})

module.exports = moongoose;