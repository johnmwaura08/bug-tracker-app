var mongoose = require('mongoose');
var Schema = mongoose.Schema

var projectSchema = new Schema({


title:String,
frontEnd: String,
backEnd: String,
user: String,
comments: String,









});

var project = mongoose.model('project',projectSchema);

module.exports = project;