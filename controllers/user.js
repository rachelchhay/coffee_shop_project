const express = require('express');
const router = express.Router();
const Coffeeshops = require('../models/coffeeshops.js');
const Users = require('../models/user.js');

router.get('/', function(req, res){
    Users.find({}, function(err, Users){
        res.json(Users);
    });
});


router.post('/', (req,res)=>{
    Users.create(req.body, function(err, createdUser){
        res.json(createdUser);
      });
    });


router.delete('/:id', function(req, res){
    Users.findByIdAndRemove(req.params.id, function(err, deletedUser){
        res.json(deletedUser);
    });
});

router.put('/:id', (req, res)=>{
    Users.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser)=>{
        res.json(updatedUser);
    });
});

module.exports = router;


//ALL ROUTES ABOVE WORK. PLEASE DON'T CHANGE CODE WITHOUT CHECKING//
