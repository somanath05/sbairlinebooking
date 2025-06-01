const Booking = require('../models/Booking');
const Flight = require('../models/Flight');
const User = require('../models/User');  // if you want to create/find users by email

exports.createBooking = async (req, res) => {
  try {
    const {
      flightId,
      airline,
      fullName,
      email,
      phone,
      from,
      to,
      date,
      passengers,
    } = req.body;

    // Validate required fields
    if (
      !flightId ||
      !airline ||
      !fullName ||
      !email ||
      !phone ||
      !from ||
      !to ||
      !date ||
      !passengers
    ) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Find flight by _id and verify airline, departure, arrival
    const flight = await Flight.findById(flightId);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    // Basic consistency check with provided details
    if (
      flight.airline !== airline ||
      flight.departure !== from ||
      flight.arrival !== to
    ) {
      return res.status(400).json({ message: 'Flight details do not match' });
    }

    const totalPrice = flight.price * passengers;

    // Optionally find or create user by email
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name: fullName, email, phone });
    }

    // Create booking
    const booking = await Booking.create({
      user: user._id,
      flight: flight._id,
      passengers,
      totalPrice,
      fullName,
      email,
      phone,
      origin: from,
      destination: to,
      date,
    });

    return res.status(201).json({ message: 'Booking confirmed', bookingId: booking._id });
  } catch (err) {
    console.error('Booking error:', err);
    return res.status(500).json({ message: 'Server error during booking' });
  }
};
