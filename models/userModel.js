const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: { type: Number, required: true },
    userName: { type: String, required: true ,unique:[true,"username is already taken"]},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: false },
    mobileNo: { type: String, required: false },
    address: { type: String, required: false },
    DOB: { type: Date, required: false },
    profileImage: { type: String, required: false }
  },
  {
    timestamps:true
  });

  module.exports = mongoose.model("users",userSchema);