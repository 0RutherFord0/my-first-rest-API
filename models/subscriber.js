const mongoose = require('mongoose')
const validator = require('validator');


const subscriberSchema = new mongoose.Schema({
  First_Name: {
    type: String,
    required: true
  },
  Last_Name: {
    type: String,
    required: true
  },
  Email_Id: {
    type: String,
    required: true,
    index: {unique: true, dropDups: true},
    validate:{
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
      isAsync: false
    }
  },
  Phone_No: {
    type: Number,
    required: true
  },
  // subscribedToChannel: {
  //   type: String,
  //   required: true
  // },
  Comment: {
    type: String,
  },
  // subscribeDate: {
  //   type: String,
  //   required: true,
  //   default: Date.now
  // }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
