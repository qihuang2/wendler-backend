'use strict';

var mongoose = require('mongoose');

var LiftSchema = new mongoose.Schema({
  max : Number,
  week : Number
});


module.exports = LiftSchema;