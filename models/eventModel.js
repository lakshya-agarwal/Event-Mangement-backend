const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: Date, required: true },
    price: { type: Number, required: true }
  },
  {
    timestamps:true
  });

  module.exports = mongoose.model("events",eventSchema);