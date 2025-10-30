import mongoose from 'mongoose';

//Item Schema
const itemSchema = mongoose.Schema({
    item: { type: String },
    description: { type: String },
    startPrice: { type: Number },
    reservePrice: { type: Number }
})

const Item = mongoose.model('Item', itemSchema);

export default Item;

