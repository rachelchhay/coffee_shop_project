const mongoose = require('mongoose');
const Coffeeshop = require('../models/coffeeshops.js');

const userSchema = mongoose.Schema({
  name: String,
  location: String,
  favoritedrink: String,
  work: Boolean,
	coffeeshops: [Coffeeshop.schema]   //STILL TRYING TO LINK DATA//
});

const User = mongoose.model('User', userSchema);

module.exports = User;
