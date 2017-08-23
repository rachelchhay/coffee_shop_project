const express = require('express');
const router = express.Router();
const Coffeeshops = require('../models/coffeeshops.js');
const getYelpResponse = require('../bin/yelp.js');
// const launchLogin = require('../models/showLogin.js');


router.get('/', function(req, res){
    Coffeeshops.find({}, function(err, foundCoffeeshops){
        res.json(foundCoffeeshops);
});
});

router.post('/', (req,res)=>{
    Coffeeshops.create(req.body, function(err, createdCoffeeshop){
        res.json(createdCoffeeshop);
  });
});

router.delete('/:id', function(req, res){
  Coffeeshops.findByIdAndRemove(req.params.id, function(err, deletedCoffeeshop){
        res.json(deletedCoffeeshop);
  });
});


router.put('/:id', (req, res)=>{
  Coffeeshops.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCoffeeshop)=>{
        res.json(updatedCoffeeshop);
  });
});


// Yelp Response route ========================

router.post('/getYelpResponse', (req, res) => {
  console.log('req.body: ', req.body);
  getYelpResponse(res, 'coffee', req.body);
})


//ALL ROUTES ABOVE WORK. PLEASE DON'T CHANGE CODE WITHOUT CHECKING//
//
router.post('/showLogin', (req, res) => {
  console.log('hello');
  res.send();
})

module.exports = router;
