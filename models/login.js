const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const LoginSchema = new mongoose.Schema({
  username: String,
  password: String
});

LoginSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Login", LoginSchema);
