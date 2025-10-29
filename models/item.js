const mongoose = require('mongoose');

//Item Schema
const itemSchema = mongoose.Schema({
    item: { type: String },
    description: { type: String },
    startPrice: { type: Number },
    reservePrice: { type: Number }
})

module.exports = mongoose.model('Item', itemSchema);

