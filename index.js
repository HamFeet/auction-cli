import mongoose from 'mongoose';
import { connectDB } from './db.js';

//Import model
import Item from'./models/item.js'

//Add Item
const addItem = async (item) => {
    await connectDB();
    Item.create(item).then(item => {
        console.info('New Item Added');
        mongoose.connection.close();
    })
}
//Find Item
const findItem = async (item) => {
    await connectDB();
    try {
        //Make case insensitive
        const search = new RegExp(item, 'i');
        const results = await Item.find({ item: search })
        console.info(results);
        console.info(`${results.length} matches`);
        return results
    } catch (err) {
        console.error("Error during item search:", err)
        throw err;
    } 
    finally {
        mongoose.connection.close();
    }
}

//Update Item
const updateItem = async (_id, item) => {
    await connectDB();
    Item.updateOne({_id}, item)
    .then(results => {
        console.info('Item updated');
        mongoose.connection.close();
    });
}

//Remove Item
const removeItem = async (_id) => {
    await connectDB();
    Item.deleteOne({_id})
    .then(results => {
        console.info('Item removed');
        mongoose.connection.close();
    });
}

//List Items
const listItems = async () => {
    await connectDB();
    Item.find()
    .then(results => {
        console.info(results);
        console.info(`${results.length} items`);
        mongoose.connection.close();
    });
}

//Export methods 

export {
    addItem,
    findItem,
    updateItem,
    removeItem,
    listItems
};