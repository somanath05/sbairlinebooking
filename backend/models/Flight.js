// const mongoose = require('mongoose');

// const flightSchema = new mongoose.Schema({
//   airline: String,
//   flightNumber: String,
//   departure: String,
//   arrival: String,
//   departureTime: Date,
//   arrivalTime: Date,
//   price: Number,
//   seatsAvailable: Number,
// }, { timestamps: true });

// module.exports = mongoose.model('Flight', flightSchema);


const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: String,
  flightNumber: { type: String, required: true, unique: true },
  departure: String,
  arrival: String,
  price: Number,
  seatsAvailable: Number,
}, { timestamps: true });

module.exports = mongoose.model('Flight', flightSchema);

