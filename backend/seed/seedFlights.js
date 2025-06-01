// const mongoose = require('mongoose');
// const Flight = require('../models/Flight');

// // Static flights data (no _id field)
// const staticFlights = [
//   { airline: 'IndiGo', departure: 'Ahmedabad', arrival: 'Ranchi', price: 5368 },
//   { airline: 'Akasa Air', departure: 'Pune', arrival: 'Jaipur', price: 2996 },
//   { airline: 'SpiceJet', departure: 'Surat', arrival: 'Cochin', price: 6196 },
//   { airline: 'Go First', departure: 'Kolkata', arrival: 'Surat', price: 2295 },
//   { airline: 'AirAsia India', departure: 'Ahmedabad', arrival: 'Goa', price: 8539 },
//   { airline: 'Vistara', departure: 'Chandigarh', arrival: 'Amritsar', price: 7263 },
//   { airline: 'AirAsia India', departure: 'Patna', arrival: 'Hyderabad', price: 5882 },
//   { airline: 'AirAsia India', departure: 'Chennai', arrival: 'Chandigarh', price: 3303 },
//   { airline: 'SpiceJet', departure: 'Mumbai', arrival: 'Hyderabad', price: 5843 },
//   { airline: 'AirAsia India', departure: 'Hyderabad', arrival: 'Jaipur', price: 3625 },
//   { airline: 'AirAsia India', departure: 'Surat', arrival: 'Nagpur', price: 8244 },
//   { airline: 'Akasa Air', departure: 'Lucknow', arrival: 'Patna', price: 4763 },
//   { airline: 'Akasa Air', departure: 'Ahmedabad', arrival: 'Goa', price: 3294 },
//   { airline: 'AirAsia India', departure: 'Visakhapatnam', arrival: 'Bengaluru', price: 7039 },
//   { airline: 'Go First', departure: 'Nagpur', arrival: 'Pune', price: 9484 },
//   { airline: 'Vistara', departure: 'Nagpur', arrival: 'Amritsar', price: 7521 },
//   { airline: 'Go First', departure: 'Amritsar', arrival: 'Ahmedabad', price: 8480 },
//   { airline: 'SpiceJet', departure: 'Bhopal', arrival: 'Chennai', price: 4834 },
//   { airline: 'AirAsia India', departure: 'Goa', arrival: 'Delhi', price: 8414 },
//   { airline: 'SpiceJet', departure: 'Pune', arrival: 'Kolkata', price: 4669 },
//   { airline: 'IndiGo', departure: 'Mumbai', arrival: 'Bangalore', price: 5500 },
//   { airline: 'IndiGo', departure: 'Bangalore', arrival: 'Mumbai', price: 5400 },
//   { airline: 'Vistara', departure: 'Mumbai', arrival: 'Delhi', price: 7000 },
//   { airline: 'Vistara', departure: 'Delhi', arrival: 'Mumbai', price: 6900 },
//   { airline: 'AirAsia India', departure: 'Pune', arrival: 'Chennai', price: 4800 },
//   { airline: 'AirAsia India', departure: 'Chennai', arrival: 'Pune', price: 4700 },
//   { airline: 'Akasa Air', departure: 'Belagavi', arrival: 'Mumbai', price: 4200 },
//   { airline: 'Akasa Air', departure: 'Mumbai', arrival: 'Belagavi', price: 4300 },
//   { airline: 'SpiceJet', departure: 'Delhi', arrival: 'Bangalore', price: 6500 },
//   { airline: 'SpiceJet', departure: 'Bangalore', arrival: 'Delhi', price: 6400 },
//   { airline: 'Go First', departure: 'Belagavi', arrival: 'Pune', price: 4700 },
//   { airline: 'Go First', departure: 'Pune', arrival: 'Belagavi', price: 4600 },
// ];

// // Connect to MongoDB (replace with your DB name)
// mongoose.connect('mongodb://localhost:27017/airline-booking', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
//   return Flight.deleteMany({}); // Clear existing flights
// }).then(() => {
//   return Flight.insertMany(staticFlights);
// }).then((docs) => {
//   console.log(`Inserted ${docs.length} flights.`);
//   mongoose.disconnect();
// }).catch((err) => {
//   console.error('Error seeding flights:', err);
//   mongoose.disconnect();
// });



const mongoose = require('mongoose');
const Flight = require('../models/Flight');

// Base flight data without flightNumber
const staticFlights = [
  { airline: 'IndiGo', departure: 'Ahmedabad', arrival: 'Ranchi', price: 5368, seatsAvailable: 50 },
  { airline: 'Akasa Air', departure: 'Pune', arrival: 'Jaipur', price: 2996, seatsAvailable: 40 },
  { airline: 'SpiceJet', departure: 'Surat', arrival: 'Cochin', price: 6196, seatsAvailable: 35 },
  { airline: 'Go First', departure: 'Kolkata', arrival: 'Surat', price: 2295, seatsAvailable: 60 },
  { airline: 'AirAsia India', departure: 'Ahmedabad', arrival: 'Goa', price: 8539, seatsAvailable: 45 },
  { airline: 'Vistara', departure: 'Chandigarh', arrival: 'Amritsar', price: 7263, seatsAvailable: 25 },
  { airline: 'AirAsia India', departure: 'Patna', arrival: 'Hyderabad', price: 5882, seatsAvailable: 30 },
  { airline: 'AirAsia India', departure: 'Chennai', arrival: 'Chandigarh', price: 3303, seatsAvailable: 40 },
  { airline: 'SpiceJet', departure: 'Mumbai', arrival: 'Hyderabad', price: 5843, seatsAvailable: 70 },
  { airline: 'AirAsia India', departure: 'Hyderabad', arrival: 'Jaipur', price: 3625, seatsAvailable: 55 },
  { airline: 'AirAsia India', departure: 'Surat', arrival: 'Nagpur', price: 8244, seatsAvailable: 33 },
  { airline: 'Akasa Air', departure: 'Lucknow', arrival: 'Patna', price: 4763, seatsAvailable: 44 },
  { airline: 'Akasa Air', departure: 'Ahmedabad', arrival: 'Goa', price: 3294, seatsAvailable: 25 },
  { airline: 'AirAsia India', departure: 'Visakhapatnam', arrival: 'Bengaluru', price: 7039, seatsAvailable: 38 },
  { airline: 'Go First', departure: 'Nagpur', arrival: 'Pune', price: 9484, seatsAvailable: 28 },
  { airline: 'Vistara', departure: 'Nagpur', arrival: 'Amritsar', price: 7521, seatsAvailable: 60 },
  { airline: 'Go First', departure: 'Amritsar', arrival: 'Ahmedabad', price: 8480, seatsAvailable: 40 },
  { airline: 'SpiceJet', departure: 'Bhopal', arrival: 'Chennai', price: 4834, seatsAvailable: 50 },
  { airline: 'AirAsia India', departure: 'Goa', arrival: 'Delhi', price: 8414, seatsAvailable: 70 },
  { airline: 'SpiceJet', departure: 'Pune', arrival: 'Kolkata', price: 4669, seatsAvailable: 36 },
  { airline: 'IndiGo', departure: 'Mumbai', arrival: 'Bangalore', price: 5500, seatsAvailable: 90 },
  { airline: 'IndiGo', departure: 'Bangalore', arrival: 'Mumbai', price: 5400, seatsAvailable: 80 },
  { airline: 'Vistara', departure: 'Mumbai', arrival: 'Delhi', price: 7000, seatsAvailable: 100 },
  { airline: 'Vistara', departure: 'Delhi', arrival: 'Mumbai', price: 6900, seatsAvailable: 95 },
  { airline: 'AirAsia India', departure: 'Pune', arrival: 'Chennai', price: 4800, seatsAvailable: 40 },
  { airline: 'AirAsia India', departure: 'Chennai', arrival: 'Pune', price: 4700, seatsAvailable: 40 },
  { airline: 'Akasa Air', departure: 'Belagavi', arrival: 'Mumbai', price: 4200, seatsAvailable: 30 },
  { airline: 'Akasa Air', departure: 'Mumbai', arrival: 'Belagavi', price: 4300, seatsAvailable: 30 },
  { airline: 'SpiceJet', departure: 'Delhi', arrival: 'Bangalore', price: 6500, seatsAvailable: 75 },
  { airline: 'SpiceJet', departure: 'Bangalore', arrival: 'Delhi', price: 6400, seatsAvailable: 75 },
  { airline: 'Go First', departure: 'Belagavi', arrival: 'Pune', price: 4700, seatsAvailable: 20 },
  { airline: 'Go First', departure: 'Pune', arrival: 'Belagavi', price: 4600, seatsAvailable: 20 },
];

// Add unique flightNumber to each flight
const flightsWithNumbers = staticFlights.map((flight, index) => ({
  ...flight,
  flightNumber: `FL${1000 + index}` // FL1000, FL1001, etc.
}));

// Connect to MongoDB and seed
mongoose.connect('mongodb://localhost:27017/airline-booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  return Flight.deleteMany({});
}).then(() => {
  return Flight.insertMany(flightsWithNumbers);
}).then((docs) => {
  console.log(`Inserted ${docs.length} flights.`);
  mongoose.disconnect();
}).catch((err) => {
  console.error('Error seeding flights:', err);
  mongoose.disconnect();
});
