'use strict';
let configs = require('../config.js');

var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;
var client = new auth.OAuth2(configs.google_client_id, '', '');


// callback (err, loginInfo)
function verify(token, callback) {
  console.log("token "  + token);
  console.log("client: " + configs.google_client_id);
  console.log("callback", + !callback);
  client.verifyIdToken( 
    token,
    configs.google_client_id,
    callback
  );
};


module.exports.verify = verify;