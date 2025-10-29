const mongoose = require('mongoose');

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//Conect to db
const db = mongoose.connect('mongodb://localhost:27017/auctioncli');

//Import model
const Item = require('./models/item')

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

//Export methods 

module.exports = {
    addItem,
    findItem
}