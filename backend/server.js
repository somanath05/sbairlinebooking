
// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');

// // Load environment variables from .env
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Import routes safely
// let authRoutes, flightRoutes, bookingRoutes;

// try {
//   authRoutes = require('./routes/authRoutes');
//   flightRoutes = require('./routes/flightRoutes');
//   bookingRoutes = require('./routes/bookingRoutes');
// } catch (error) {
//   console.error('❌ Error loading route files:', error.message);
//   process.exit(1);
// }

// // Check route exports
// if (
//   typeof authRoutes !== 'function' ||
//   typeof flightRoutes !== 'function' ||
//   typeof bookingRoutes !== 'function'
// ) {
//   console.error('❌ One or more route files are not exporting a valid Express router.');
//   process.exit(1);
// }

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/flights', flightRoutes);
// app.use('/api/bookings', bookingRoutes);

// Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Airline Booking API');
// });

// // 404 Handler
// app.use((req, res, next) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// // Global Error Handler
// app.use((err, req, res, next) => {
//   console.error('💥 Error:', err.stack);
//   res.status(500).json({ error: 'Server Error' });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });









// // server.js
// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// try {
//   const authRoutes = require('./routes/authRoutes');
//   const flightRoutes = require('./routes/flightRoutes');
//   const bookingRoutes = require('./routes/bookingRoutes'); // ✅ Corrected

//   app.use('/api/auth', authRoutes);
//   app.use('/api/flights', flightRoutes);
//   app.use('/api/bookings', bookingRoutes);
// } catch (err) {
//   console.error('❌ Error loading route modules:', err.message);
//   process.exit(1);
// }

// // Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Airline Booking API');
// });

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error('💥 Unhandled error:', err.stack);
//   res.status(500).json({ error: 'Server error' });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });






const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
try {
  const authRoutes = require('./routes/authRoutes');
  const flightRoutes = require('./routes/flightRoutes');
  const bookingRoutes = require('./routes/bookingRoutes'); // Ensure file is named bookingRoutes.js

  app.use('/api/auth', authRoutes);
  app.use('/api/flights', flightRoutes);
  app.use('/api/bookings', bookingRoutes);
} catch (err) {
  console.error('Error loading route modules:', err.message);
  process.exit(1);
}

app.get('/', (req, res) => {
  res.send('Welcome to the Airline Booking API');
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ error: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
