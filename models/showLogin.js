const mongoose = require('mongoose');


const LaunchLoginSchema = new mongoose.Schema({
  launchLogin: { type: Boolean, default: true }
});

module.exports = mongoose.model('LaunchLogin', LaunchLoginSchema);
