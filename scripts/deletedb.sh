#!/usr/bin/env mongo
var db = new Mongo().getDB("user");
db.dropDatabase();