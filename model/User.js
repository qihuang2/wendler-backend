'use strict';

var mongoose = require('mongoose');

var Lift = require('./Lift.js')

var UserSchema = new mongoose.Schema({
  _id: String,
  first_name: String,
  last_name: String,
  email: String,
  lifts: [Lift]
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');