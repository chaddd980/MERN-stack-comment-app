//model/comments.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  author: String,
  text: String
});

//export module to use in server.js
module.exports = mongoose.model('Comment', CommentsSchema);
