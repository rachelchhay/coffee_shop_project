const express = require('express');
const router = express.Router();
const Coffeeshops = require('../models/coffeeshops.js');
const yelp = require('../bin/yelp.js')

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

module.exports = router;


//ALL ROUTES ABOVE WORK. PLEASE DON'T CHANGE CODE WITHOUT CHECKING//
