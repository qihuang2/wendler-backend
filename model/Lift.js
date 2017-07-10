'use strict';

var mongoose = require('mongoose');

var LiftSchema = new mongoose.Schema({
  name: String,
  max : Number,
  week : Number,
  advance : Number
});


module.exports = LiftSchema;