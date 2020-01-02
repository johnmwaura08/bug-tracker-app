var mongoose = require('mongoose');

var Schema = mongoose.Schema

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    occupation:{
        type: String,
        required: true,
        
    },
    contact:{
        type: Number,
        required: true,
     
    }



});

var User = mongoose.model('user', userSchema)
module.exports= User;