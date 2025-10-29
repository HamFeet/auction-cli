const mongoose = require('mongoose');

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//Conect to db
const db = mongoose.connect('mongodb://localhost:27017/auctioncli', {
    useMongoClient: true
});