import mongoose from 'mongoose';
//Zod for sanatizing 

//Item Schema
const itemSchema = mongoose.Schema({
    item: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    startPrice: { type: Number, required: true, min: 0 },
    reservePrice: { type: Number, required: true, min: 0 }
})

const Item = mongoose.model('Item', itemSchema);

export default Item;

