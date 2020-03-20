const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim:true,
    minlength:3
  },
  // email string 
  email: {
    type: String,
    default: "",
    minlength:5
  },
  
  phone: {
    type: Number,
    default: "",
    unique: true,
    required:true
  },

  service: {
    type: String,
    default: "",
  },

  date: {
    type: Date,
    required:true,
    default: new Date()
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
