'use strict';

var User = require('../model/User.js');

function UserHelper(){};

//callback params (err, user)
UserHelper.prototype.createUser = function(userInfo, callback){
  User.create({
    _id : userInfo.id,
    first_name : userInfo.first_name,
    last_name : userInfo.last_name,
    email : userInfo.email,
    deadlift : {
      max : 0, 
      week : 0 
    },
    squat : {
      max : 0,
      week : 0
    },
    bench : {
      max : 0,
      week : 0
    },
    overhead : {
      max : 0,
      week : 0
    }
  }, callback);
};

//callback params (err, users)
UserHelper.prototype.getAllUsers = function(callback){
  User.find({}, callback);
}

//callback params (err, user)
UserHelper.prototype.getUser = function(id, callback){
  User.findById(id, callback);
};


UserHelper.prototype.updateUser = function(id, user, callback){
  User.findByIdAndUpdate(id, user, {new:true}, callback);
}

UserHelper.prototype.deleteUser = function(id, callback){
  User.findByIdAndRemove(id, callback);
}

UserHelper.prototype.parsePayload = function(payload){
  var user = {};
  user.id = payload['sub'];
  user.first_name = payload['given_name'];
  user.last_name = payload['family_name'];
  user.email = payload['email'];

  return user;
} 


module.exports = UserHelper;