const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

const coffeeshopsController = require('./controllers/coffeeshops.js');
app.use('/coffeeshops', coffeeshopsController);

mongoose.connect('mongodb://localhost:27017/coffeeshop', {
  useMongoClient: true
});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
});

app.listen(3000, function(){
    console.log('===================================');
    console.log('Coffee Shop Project is listening...');
    console.log('===================================');

});
