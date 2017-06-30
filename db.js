'use strict';

var mongoose = require('mongoose');

var db = !process.env.db ? 'mongodb://localhost:27017/user' : 'mongodb://master:1q2wqawsazsx@ds017175.mlab.com:17175/user';

mongoose.connect(db);

