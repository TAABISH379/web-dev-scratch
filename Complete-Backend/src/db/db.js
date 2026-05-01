const mongoose = require('mongoose');

async function connectDB() {

    await mongoose.connect("mongodb+srv://taabish:3nLtiqmg4wZnTc@complete-backend.cghseuw.mongodb.net/helly")
        console.log("Connected to MongoDB");

}
module.exports = connectDB;