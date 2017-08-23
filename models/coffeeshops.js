const mongoose = require('mongoose');

const coffeeshopSchema = mongoose.Schema({
    name: String,
    rating: Number,
    price: String,
    address1: String

});

const Coffeeshop = mongoose.model('Coffeeshop', coffeeshopSchema);

module.exports = Coffeeshop;
