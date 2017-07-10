'use strict';

var User = require('../model/User.js');

function UserHelper(){};

//callback params (err, user)
UserHelper.prototype.createUser = function(userInfo, callback){
  var lifts = [];
  lifts.push({
    "name" : "deadlift",
    "week" : 0, 
    "max" : 0,
    "advance" : 10
  });

  lifts.push({
    "name" : "bench",
    "week" : 0, 
    "max" : 0, 
    "advance" : 5
  });


  lifts.push({
    "name" : "squat",
    "week" : 0, 
    "max" : 0,
    "advance" : 10
  });

  lifts.push({
    "name" : "overhead",
    "week" : 0, 
    "max" : 0,
    "advance" : 5
  });

  User.create({
    '_id' : userInfo.id,
    'first_name' : userInfo.first_name,
    'last_name' : userInfo.last_name,
    'email' : userInfo.email,
    'lifts' : lifts
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