'use strict';

var express = require('express');
var app = express();
var db = require('./db.js');

var loginController = require('./controller/login_controller.js');
var userController = require('./controller/user_controller.js');

app.use('/login', loginController);

app.use('/user', userController);

module.exports = app;