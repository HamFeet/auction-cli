import mongoose from 'mongoose';

//Item Schema
const itemSchema = mongoose.Schema({
    item: { type: String, required: true },
    description: { type: String, required: true },
    startPrice: { type: Number, required: true, min: 0 },
    reservePrice: { type: Number, required: true, min: 0 }
})

const Item = mongoose.model('Item', itemSchema);

export default Item;

