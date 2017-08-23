const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user.js');
const session = require('express-session');
require('dotenv').config()


app.use(bodyParser.json());
app.use(express.static('public'));

// EXPRESS-SESSION  =======================
app.use(session({
    secret: "this is a random string secret",
    resave: false,
    saveUninitialized: false

}));



const coffeeshopsController = require('./controllers/coffeeshops.js');
app.use('/coffeeshops', coffeeshopsController);

const UsersController = require('./controllers/user.js');
app.use('/user', UsersController);

const sessionController = require('./controllers/session.js');
app.use('/session', sessionController);

var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/coffeeshop';
mongoose.connect(mongoUri);

mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
    console.log('===================================');
});


port = process.env.PORT || 3000;
app.listen(port);
    console.log('===================================');
    console.log('Server running on port: ' + port);
    console.log('===================================');
