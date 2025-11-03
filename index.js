import mongoose from 'mongoose';

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//Conect to db
const db = mongoose.connect('mongodb://localhost:27017/auctioncli');

//Import model
import Item from'./models/item.js'

//Add Item
const addItem = (item) => {
    Item.create(item).then(item => {
        console.info('New Item Added');
        mongoose.connection.close();
    })
}
//Find Item
const findItem = (item) => {
    //Make case insensitive
    const search = new RegExp(item, 'i');
    Item.find({ item: search }).then(results => {
        console.info(results);
        console.info(`${results.length} matches`);
        mongoose.connection.close();
    });
}

//Update Item
const updateItem = (_id, item) => {
    Item.updateOne({_id}, item)
    .then(results => {
        console.info('Item updated');
        mongoose.connection.close();
    });
}

//Remove Item
const removeItem = (_id) => {
    Item.deleteOne({_id})
    .then(results => {
        console.info('Item removed');
        mongoose.connection.close();
    });
}

//List Items
const listItems = () => {
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