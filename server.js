const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user.js');
const session = require('express-session');
require('dotenv').config()

//socket requires//
const http = require('http').Server(app);
const io = require('socket.io')(http);
//


//End socket requires//

console.log('server');


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

// Fixes mongoose promise deprecation warning
mongoose.Promise = global.Promise;


var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/coffeeshop';
mongoose.connect(mongoUri, {
  useMongoClient: true
});

///socket io connectors//
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
///END socket io connectors//

mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
    console.log('===================================');
});

//port connection for mongoose, CRUD, and API//
const port = process.env.PORT || 3000;

//port connection for http-socket//
http.listen(port, ()=>{
  console.log('===================================');
  console.log('Server running on port: ' + port);
  console.log('===================================');
});
