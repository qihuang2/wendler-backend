'use strict';


var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var UserHelper = require('../helper/user_helper.js');
var userHelper = new UserHelper();

var googleTokenHelper = require('../helper/google_token_helper.js');
var tokenHelper = require('../helper/token_helper.js');


router.post('/', (req, res) => {
  console.log("token: "+ req.body);
  console.log("tok : " + req.body[0]);
  googleTokenHelper.verify(
    req.body.token,
    (err, login) => {
      if(err){ //google token error
        console.log(err);
        return res.status(500).send("Invalid token");
      }

      //get user
      var googleUser = userHelper.parsePayload(login.getPayload());

      //see if user already exists
      userHelper.getUser(googleUser.id, (err, user) => { 
        if(err){ 
          console.log(err);
          return res.status(500).send("Invalid get user");
        }

        if (user) { //exists
          res.status(200).send(tokenHelper.addToken(user.toObject()));
        }else{ // doesnt exist

          //create user
          userHelper.createUser(googleUser, (err, user) => {
            if (err) {
              console.log(err);
              return res.status(500).send('Could not create user');
            }

            res.status(200).send(tokenHelper.addToken(user.toObject()));
          });
        }
      });
    }
  )
});




module.exports = router;