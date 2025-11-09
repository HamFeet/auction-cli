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
        console.error("Error during item search:", err);
        throw err;
    } 
    finally {
        mongoose.connection.close();
    }
}

//Update Item
const updateItem = async (_id, newItem) => {
    await connectDB();
    try {
        const results =  await Item.findByIdAndUpdate({_id}, newItem, { new: true });
        console.info("Item updated:", results);
        return results
    } catch (err) {
        console.error("Error during item search:", err);
        throw err;}
    finally {
        mongoose.connection.close();
    }       
}

//Remove Item
const removeItem = async (id) => {
    await connectDB();
    try {
        const result = await Item.findByIdAndDelete(id)
        console.info('Item removed:', result);
        return result
    } catch (err) {
        console.error("Error during item search:", err);
        throw err;}
    finally {
        mongoose.connection.close();
    }
}

//List Items
const listItems = async () => {
    await connectDB();
    try {
        const results = await Item.find()
        console.info(results);
        console.info(`${results.length} items`);
        return results
    } catch (err) {
        console.error("Error listing items:", err);
        throw err;
    }
    mongoose.connection.close();
}

//Export methods 

export {
    addItem,
    findItem,
    updateItem,
    removeItem,
    listItems
};