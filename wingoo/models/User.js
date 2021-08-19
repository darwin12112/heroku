const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({  
  phone: {
    type: Number,
    required: true,
    index:true
  },
  admin:{
    type:Boolean,
    default:false
  },
  nickname:{
    type: String,
    default:"member",
    required: true
  },
  password: {
    type: String,
    min: 8,
    max: 50,
    required: true
  },
  recommendationCode:
  {
    type: String,
   
    required: true,
    index:true
  },
  phone_verified:{
    type:Boolean,
    default:false
  },
  otp:{
    type:String
  },
  budget:
  {
    type: Number,
    default:0,
    required: true
  },
  refer2:{
    type:Array
  },
  refer1:{
    type:Array
  },
  refered2:{
    type:Array
  },
  refered1:{
    type:Array
  },
  bank_card:{
    type:Array
  },
  email:{
    type:String,
    required: true
  },
  // phoneDetails: {
  //   country: {
  //     type: String,
  //     max: 2,
  //     required: false,
  //   },
  //   countryCallingCode: {
  //     type: String,
  //     max: 2,
  //     required: false,
  //   },
  //   nationalNumber: {
  //     type: String,
  //     max: 13,
  //     required: false,
  //   },
  //   number: {
  //     type: String,
  //     max: 15,
  //     required: false,
  //   },
  //   verified: {
  //     type: Boolean,
  //     required: false,
  //   },
  //   verificationRequestId: {
  //     type: String,
  //     max: 50,
  //     required: false,
  //   },
  //   verificationCode: {
  //     type: String,
  //     max: 6,
  //     required: false,
  //   },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now,
  //   },
  // },

  // emailVerified: {
  //   type: Boolean,
  //   required: true,
  // },
  updatedAt: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
