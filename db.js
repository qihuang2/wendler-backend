'use strict';

var mongoose = require('mongoose');

var db = !process.env.db ? 'mongodb://localhost:27017/user' : process.env.db;

mongoose.connect(db);

