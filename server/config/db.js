const mongoose = require("mongoose");
require('dotenv').config();


const connectDB = mongoose.connect(process.env.MONGODB_URI);
console.log("connected to db")
module.exports = connectDB;