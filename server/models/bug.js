var mongoose = require('mongoose')

var Schema = mongoose.Schema

var bugSchema = new Schema({

title:{
    type: String,
    required: true,
},
project:{
    type: String,
    required: true,
},
deadline:{
    type: Date,
    required: true,
},
bugtype:{
    type: String,
    required: true,
},
status:{
    type: String,
    required: true,
},
comments:{
    type: String,
    required: true,
}
})

var Bug = mongoose.model('bug', bugSchema);

module.exports = Bug;