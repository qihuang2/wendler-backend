'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  _id: String,
  first_name: String,
  last_name: String,
  email: String,
  deadlift: {
    max : Number, 
    week : Number
  },
  squat: {
    max : Number, 
    week : Number
  } ,
  bench: {
    max : Number, 
    week : Number
  },
  overhead: {
    max : Number, 
    week : Number
  }
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');