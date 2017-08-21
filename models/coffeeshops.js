const mongoose = require('mongoose');

const coffeeshopSchema = mongoose.Schema({
    name: String,
    location: String,
    description: String
    // freeWifi: true,
    // drivethru:true

});

const Coffeeshop = mongoose.model('Coffeeshop', coffeeshopSchema);

module.exports = Coffeeshop;
