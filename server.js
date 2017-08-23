const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Login = require('./models/login.js');
const session = require('express-session');

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


mongoose.connect('mongodb://localhost:27017/coffeeshop', {
  useMongoClient: true
});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
    console.log('===================================');
});

app.listen(3000, function(){
    console.log('===================================');
    console.log('Coffee Shop Project is listening...');
    console.log('===================================');

});
