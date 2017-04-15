let mongoose = require('mongoose');
let schema = mongoose.Schema;
let modelEvent=require('./events')
var uniqueValidator = require('mongoose-unique-validator');
let eventSchema = new schema({
  date:{
    type:Date,
    required:[true,'please input youre event date']
  },
  email:{
    type:String,
    required:[true,'please input email'],
    validate:{
      validator:function(mail){
          return /[\d\w].+@[\d\w].+[.].+/.test(mail)
      },
      message:'please input correct email'
    }
  },
  title:{
    type:String,
    required:[true,'please input youre event title'],
    unique: true
  },
  name:{
    type:String,
    required:[true,'please input youre event name']
  },
})

eventSchema.plugin(uniqueValidator)
var Event1 = mongoose.model('Event1',eventSchema);

module.exports = Event1;
