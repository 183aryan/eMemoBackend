const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://aryan183choudhary:aryan@cluster0.i9txpqi.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo");
    })
}

module.exports = connectToMongo;
