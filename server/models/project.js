var mongoose = require('mongoose');
var Schema = mongoose.Schema

var projectSchema = new Schema({


title:String,
frontEnd: String,
backEnd: String,
user: String,
comments: String,









});

var Project = mongoose.model('project',projectSchema);

module.exports = Project;
