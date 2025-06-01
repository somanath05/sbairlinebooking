
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import BookingForm from '../components/BookingForm';

// const BookingPage = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);

//   // Support both param naming conventions:
//   const flightId = queryParams.get('flightId') || queryParams.get('flightNumber') || '';
//   const airline = queryParams.get('airline') || '';
//   const from = queryParams.get('from') || queryParams.get('origin') || '';
//   const to = queryParams.get('to') || queryParams.get('destination') || '';
//   const date = queryParams.get('date') || '';

//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleBookingSubmit = async (bookingData) => {
//     setLoading(true);
//     setSuccessMessage('');
//     setErrorMessage('');

//     try {
//       const payload = {
//         flightId,
//         airline,
//         from,
//         to,
//         date,
//         ...bookingData,
//       };

//       const response = await fetch('http://localhost:5000/api/bookings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Booking failed');
//       }

//       setSuccessMessage('Booking confirmed! Thank you for choosing us.');
//     } catch (error) {
//       setErrorMessage(error.message || 'An unexpected error occurred.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Book Your Flight</h1>

//       <div className="mb-8 p-4 border rounded-lg bg-gray-50">
//         <h2 className="text-xl font-semibold mb-2">Flight Details</h2>
//         <p><strong>Flight ID:</strong> {flightId || 'N/A'}</p>
//         <p><strong>Airline:</strong> {airline || 'N/A'}</p>
//         <p><strong>From:</strong> {from || 'N/A'}</p>
//         <p><strong>To:</strong> {to || 'N/A'}</p>
//         <p><strong>Date:</strong> {date || 'N/A'}</p>
//       </div>

//       {successMessage && (
//         <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">{successMessage}</div>
//       )}
//       {errorMessage && (
//         <div className="mb-4 p-4 bg-red-100 text-red-800 rounded">{errorMessage}</div>
//       )}

//       <BookingForm onSubmit={handleBookingSubmit} />

//       {loading && <p className="mt-4 text-gray-600">Submitting your booking...</p>}
//     </div>
//   );
// };

// export default BookingPage;





// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import BookingForm from '../components/BookingForm';

// const BookingPage = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);

//   const flightId = queryParams.get('flightId') || queryParams.get('flightNumber') || '';
//   const airline = queryParams.get('airline') || '';
//   const from = queryParams.get('from') || queryParams.get('origin') || '';
//   const to = queryParams.get('to') || queryParams.get('destination') || '';
//   const date = queryParams.get('date') || '';

//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleBookingSubmit = async (bookingData) => {
//     setLoading(true);
//     setSuccessMessage('');
//     setErrorMessage('');

//     try {
//       const payload = {
//         flightId,
//         airline,
//         from,
//         to,
//         date,
//         ...bookingData,
//       };

//       const response = await fetch('http://localhost:5000/api/bookings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Booking failed');
//       }

//       setSuccessMessage('🎉 Booking confirmed! Thank you for choosing us.');
//     } catch (error) {
//       setErrorMessage(error.message || '❌ An unexpected error occurred.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-8 border border-gray-200">
//         <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">Book Your Flight</h1>

//         <div className="mb-8 p-6 bg-gray-100 border border-gray-300 rounded-lg">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">✈️ Flight Details</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
//             <p><strong>Flight ID:</strong> {flightId || 'N/A'}</p>
//             <p><strong>Airline:</strong> {airline || 'N/A'}</p>
//             <p><strong>From:</strong> {from || 'N/A'}</p>
//             <p><strong>To:</strong> {to || 'N/A'}</p>
//             <p><strong>Date:</strong> {date || 'N/A'}</p>
//           </div>
//         </div>

//         {successMessage && (
//           <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg text-center shadow-sm">
//             {successMessage}
//           </div>
//         )}
//         {errorMessage && (
//           <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg text-center shadow-sm">
//             {errorMessage}
//           </div>
//         )}

//         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-inner">
//           <BookingForm onSubmit={handleBookingSubmit} />
//         </div>

//         {loading && (
//           <p className="mt-6 text-center text-blue-700 font-medium animate-pulse">
//             Submitting your booking...
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookingPage;






import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const flightId = queryParams.get('flightId') || queryParams.get('flightNumber') || '';
  const airline = queryParams.get('airline') || '';
  const from = queryParams.get('from') || queryParams.get('origin') || '';
  const to = queryParams.get('to') || queryParams.get('destination') || '';
  const date = queryParams.get('date') || '';

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBookingSubmit = async (bookingData) => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const payload = {
        flightId,
        airline,
        from,
        to,
        date,
        ...bookingData,
      };

      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Booking failed');
      }

      setSuccessMessage('🎉 Booking confirmed! Thank you for choosing us.');
    } catch (error) {
      setErrorMessage(error.message || '❌ An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-page">
      <style>{`
        .booking-page {
          min-height: 100vh;
          background: linear-gradient(90deg, #dbeafe, #ffffff, #ede9fe);
          padding: 3rem 1rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .booking-container {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          max-width: 700px;
          width: 100%;
          padding: 40px 30px;
          border: 1px solid #d1d5db;
        }

        h1 {
          text-align: center;
          font-weight: 800;
          font-size: 2.75rem;
          color: #4338ca;
          margin-bottom: 2.5rem;
        }

        .flight-details {
          background: #f3f4f6;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #d4d4d8;
          margin-bottom: 2rem;
        }

        .flight-details h2 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 1rem;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem 2rem;
          color: #4b5563;
          font-weight: 500;
        }

        .details-grid p {
          margin: 0;
        }

        .message {
          margin-bottom: 1.5rem;
          padding: 16px;
          border-radius: 10px;
          font-weight: 600;
          text-align: center;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
        }

        .success {
          background-color: #d1fae5;
          border: 1px solid #10b981;
          color: #065f46;
        }

        .error {
          background-color: #fee2e2;
          border: 1px solid #ef4444;
          color: #b91c1c;
        }

        .form-container {
          background: white;
          padding: 24px;
          border-radius: 14px;
          border: 1px solid #d1d5db;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
        }

        .loading-text {
          margin-top: 20px;
          text-align: center;
          font-weight: 600;
          color: #2563eb;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% {opacity: 1;}
          50% {opacity: 0.6;}
        }
      `}</style>

      <div className="booking-container">
        <h1>Book Your Flight</h1>

        <section className="flight-details">
          <h2>✈️ Flight Details</h2>
          <div className="details-grid">
            <p><strong>Flight ID:</strong> {flightId || 'N/A'}</p>
            <p><strong>Airline:</strong> {airline || 'N/A'}</p>
            <p><strong>From:</strong> {from || 'N/A'}</p>
            <p><strong>To:</strong> {to || 'N/A'}</p>
            <p><strong>Date:</strong> {date || 'N/A'}</p>
          </div>
        </section>

        {successMessage && <div className="message success">{successMessage}</div>}
        {errorMessage && <div className="message error">{errorMessage}</div>}

        <section className="form-container">
          <BookingForm onSubmit={handleBookingSubmit} />
        </section>

        {loading && <p className="loading-text">Submitting your booking...</p>}
      </div>
    </div>
  );
};

export default BookingPage;
