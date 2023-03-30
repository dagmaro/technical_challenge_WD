const mongoose = require("mongoose");

const phones = new mongoose.Schema({
    id: Number,
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number
})

const Phone = mongoose.model("Phone", phones)
module.exports = Phone;