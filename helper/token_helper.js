'use strict';

let configs = require('../config.js');
var jwt = require('jsonwebtoken');

function addToken(object) {
  object.token = jwt.sign(object, configs.token_secret);
  return object;
};

//callback (err, decoded)
function verify(token, callback){
  jwt.verify(token, configs.token_secret ,callback);
}


module.exports.addToken = addToken;
module.exports.verify = verify;