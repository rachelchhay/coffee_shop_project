const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user.js');
const session = require('express-session');
require('dotenv').config()

//socket requires//
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

//End socket requires//


app.use(bodyParser.json());
app.use(express.static('public'));

//socket route//
// app.get('/', function(req, res){
// res.sendFile(__dirname +'/index.html');
// });
//END socket route//


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
mongoose.connect(mongoUri, {
  useMongoClient: true
});

///socket io connectors//
// io.on('connection', function(socket){
//   socket.emit('news', { hello: 'world' });
//   socket.on('chat message', function(msg){
//     // io.emit('chat message', msg);
//   });
// });

///END socket io connectors//

mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
    console.log('===================================');
});


port = process.env.PORT || 3000;
app.listen(port);
    console.log('===================================');
    console.log('Server running on port: ' + port);
    console.log('===================================');
