// ConfirmationPage.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();

  // Parse query params to show booking details
  const queryParams = new URLSearchParams(location.search);
  const flightId = queryParams.get('flightId');
  const airline = queryParams.get('airline');
  const from = queryParams.get('from');
  const to = queryParams.get('to');
  const date = queryParams.get('date');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Booking Confirmed!</h2>
        <p className="mb-6 text-gray-700">Thank you for booking with us. Here are your booking details:</p>

        <ul className="text-left text-gray-800 space-y-2 mb-6">
          <li><strong>Flight ID:</strong> {flightId || 'N/A'}</li>
          <li><strong>Airline:</strong> {airline || 'N/A'}</li>
          <li><strong>From:</strong> {from || 'N/A'}</li>
          <li><strong>To:</strong> {to || 'N/A'}</li>
          <li><strong>Date:</strong> {date || 'N/A'}</li>
        </ul>

        <Link
          to="/flights"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Book Another Flight
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
