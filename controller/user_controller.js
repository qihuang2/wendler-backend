'use strict';


var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var UserHelper = require('../helper/user_helper.js');
var userHelper = new UserHelper();

var tokenHelper = require('../helper/token_helper.js');

router.put('/:id', (req, res) => {

  if (req.params.id !== req.body._id) {
    console.log('Ids dont match');
    return res.status(500).send("Bad id");
  }

  var token = req.headers.authorization;

  tokenHelper.verify(token, (err, decoded) => {

    if(err || req.body._id !== decoded._id){
      console.log(err);
      return res.status(500).send('Bad token');
    }

    userHelper.updateUser(req.params.id, req.body, (err, user) => {
      if(err){
        console.log(err);
        return res.status(500).send('Could not update user');
      }

      res.status(200).send(user);
    });

  });
});


router.get('/', function (req, res) {
    userHelper.getAllUsers(function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

router.delete('/:id', function (req, res) {
    userHelper.deleteUser(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ req.params.id +" was deleted.");
    });
});


module.exports = router;

