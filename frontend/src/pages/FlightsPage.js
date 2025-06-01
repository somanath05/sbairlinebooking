// import React, { useEffect, useState } from 'react';
// import API from '../api';
// import { useNavigate } from 'react-router-dom';

// const allowedCities = ['Mumbai', 'Bangalore', 'Pune', 'Delhi', 'Belagavi', 'Chennai'];

// const FlightsPage = () => {
//   const [flights, setFlights] = useState([]);
//   const [fromSearch, setFromSearch] = useState('');
//   const [toSearch, setToSearch] = useState('');
//   const [date, setDate] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     API.get('/flights')
//       .then(res => {
//         setFlights(res.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError('Failed to load flights.');
//         setLoading(false);
//       });
//   }, []);

//   const filteredFlights = flights.filter(flight => {
//     if (!fromSearch && !toSearch) return true;

//     if (fromSearch && !allowedCities.includes(fromSearch)) return false;
//     if (toSearch && !allowedCities.includes(toSearch)) return false;

//     const fromMatch = fromSearch ? flight.departure === fromSearch : true;
//     const toMatch = toSearch ? flight.arrival === toSearch : true;

//     return fromMatch && toMatch;
//   });

//   const handleBookingClick = (flight) => {
//     if (!date) {
//       alert('Please select a flight date before booking.');
//       return;
//     }

//     const params = new URLSearchParams({
//       flightId: flight._id,
//       airline: flight.airline,
//       from: flight.departure,
//       to: flight.arrival,
//       date,
//     }).toString();

//     navigate(`/booking?${params}`);
//   };

//   return (
//     <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-6xl mx-auto">
//         <header className="mb-10 text-center">
//           <h1 className="text-4xl font-extrabold text-blue-900 mb-3">Available Flights</h1>
//           <p className="text-blue-700 text-lg max-w-xl mx-auto">
//             Search flights by departure and destination cities (restricted to selected cities).
//           </p>
//         </header>

//         <div className="mb-8 flex flex-col md:flex-row gap-6 max-w-md mx-auto">
//           <select
//             value={fromSearch}
//             onChange={e => setFromSearch(e.target.value)}
//             className="flex-1 p-3 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white text-blue-900 font-medium"
//           >
//             <option value="">From (Departure city)</option>
//             {allowedCities.map(city => (
//               <option key={city} value={city}>{city}</option>
//             ))}
//           </select>

//           <select
//             value={toSearch}
//             onChange={e => setToSearch(e.target.value)}
//             className="flex-1 p-3 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white text-blue-900 font-medium"
//           >
//             <option value="">To (Destination city)</option>
//             {allowedCities.map(city => (
//               <option key={city} value={city}>{city}</option>
//             ))}
//           </select>

//           <input
//             type="date"
//             value={date}
//             onChange={e => setDate(e.target.value)}
//             className="flex-1 p-3 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white text-blue-900 font-medium"
//             min={new Date().toISOString().split('T')[0]}  // Disable past dates
//           />
//         </div>

//         {loading ? (
//           <div className="text-center py-10 text-lg text-blue-500 font-semibold">Loading flights...</div>
//         ) : error ? (
//           <div className="text-center text-red-600 font-semibold">{error}</div>
//         ) : filteredFlights.length === 0 ? (
//           <div className="text-center text-gray-500 text-lg font-medium">
//             No flights found {fromSearch && `from "${fromSearch}"`} {toSearch && `to "${toSearch}"`}.
//           </div>
//         ) : (
//           <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {filteredFlights.map(flight => (
//               <li
//                 key={flight._id}
//                 className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <div>
//                   <h2 className="text-xl font-semibold text-blue-900 mb-2">{flight.airline}</h2>
//                   <p className="text-gray-700 mb-1"><span className="font-medium">From:</span> {flight.departure}</p>
//                   <p className="text-gray-700 mb-1"><span className="font-medium">To:</span> {flight.arrival}</p>
//                 </div>
//                 <div className="mt-4 flex justify-between items-center">
//                   <div className="text-lg font-bold text-blue-700">₹ {flight.price.toLocaleString()}</div>
//                   <button
//                     onClick={() => handleBookingClick(flight)}
//                     className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FlightsPage;





// // frontend/src/pages/FlightsPage.js
// import React, { useEffect, useState } from 'react';
// import API from '../api';
// import { useNavigate } from 'react-router-dom';

// const allowedCities = ['Mumbai', 'Bangalore', 'Pune', 'Delhi', 'Belagavi', 'Chennai'];

// const FlightsPage = () => {
//   const [flights, setFlights] = useState([]);
//   const [fromSearch, setFromSearch] = useState('');
//   const [toSearch, setToSearch] = useState('');
//   const [date, setDate] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     API.get('/flights')
//       .then(res => {
//         setFlights(res.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError('Failed to load flights.');
//         setLoading(false);
//       });
//   }, []);

//   const filteredFlights = flights.filter(flight => {
//     if (!fromSearch && !toSearch) return true;
//     if (fromSearch && !allowedCities.includes(fromSearch)) return false;
//     if (toSearch && !allowedCities.includes(toSearch)) return false;

//     const fromMatch = fromSearch ? flight.departure === fromSearch : true;
//     const toMatch = toSearch ? flight.arrival === toSearch : true;
//     return fromMatch && toMatch;
//   });

//   const handleBookingClick = (flight) => {
//     if (!date) {
//       alert('Please select a flight date before booking.');
//       return;
//     }

//     const params = new URLSearchParams({
//       flightId: flight._id,
//       airline: flight.airline,
//       from: flight.departure,
//       to: flight.arrival,
//       date,
//     }).toString();

//     navigate(`/booking?${params}`);
//   };

//   return (
//     <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-6xl mx-auto">
//         <header className="mb-10 text-center">
//           <h1 className="text-4xl font-extrabold text-blue-900 mb-3">Available Flights</h1>
//           <p className="text-blue-700 text-lg max-w-xl mx-auto">
//             Search flights by departure and destination cities (restricted to selected cities).
//           </p>
//         </header>

//         <div className="mb-8 flex flex-col md:flex-row gap-6 max-w-md mx-auto">
//           <select
//             value={fromSearch}
//             onChange={e => setFromSearch(e.target.value)}
//             className="flex-1 p-3 border border-blue-300 rounded-lg shadow-md bg-white text-blue-900"
//           >
//             <option value="">From (Departure city)</option>
//             {allowedCities.map(city => (
//               <option key={city} value={city}>{city}</option>
//             ))}
//           </select>

//           <select
//             value={toSearch}
//             onChange={e => setToSearch(e.target.value)}
//             className="flex-1 p-3 border border-blue-300 rounded-lg shadow-md bg-white text-blue-900"
//           >
//             <option value="">To (Destination city)</option>
//             {allowedCities.map(city => (
//               <option key={city} value={city}>{city}</option>
//             ))}
//           </select>

//           <input
//             type="date"
//             value={date}
//             onChange={e => setDate(e.target.value)}
//             className="flex-1 p-3 border border-blue-300 rounded-lg shadow-md bg-white text-blue-900"
//             min={new Date().toISOString().split('T')[0]}
//           />
//         </div>

//         {loading ? (
//           <div className="text-center py-10 text-lg text-blue-500 font-semibold">Loading flights...</div>
//         ) : error ? (
//           <div className="text-center text-red-600 font-semibold">{error}</div>
//         ) : filteredFlights.length === 0 ? (
//           <div className="text-center text-gray-500 text-lg font-medium">
//             No flights found {fromSearch && `from "${fromSearch}"`} {toSearch && `to "${toSearch}"`}.
//           </div>
//         ) : (
//           <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {filteredFlights.map(flight => (
//               <li
//                 key={flight._id}
//                 className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <div>
//                   <h2 className="text-xl font-semibold text-blue-900 mb-2">{flight.airline}</h2>
//                   <p className="text-gray-700"><strong>From:</strong> {flight.departure}</p>
//                   <p className="text-gray-700"><strong>To:</strong> {flight.arrival}</p>
//                   <p className="text-gray-700"><strong>Available Seats:</strong> {flight.availableSeats}</p>
//                 </div>
//                 <div className="mt-4 flex justify-between items-center">
//                   <div className="text-lg font-bold text-blue-700">₹ {flight.price.toLocaleString()}</div>
//                   <button
//                     onClick={() => handleBookingClick(flight)}
//                     disabled={flight.availableSeats === 0}
//                     className={`px-4 py-2 rounded-lg font-semibold transition ${
//                       flight.availableSeats === 0
//                         ? 'bg-gray-400 cursor-not-allowed text-white'
//                         : 'bg-indigo-600 hover:bg-indigo-700 text-white'
//                     }`}
//                   >
//                     {flight.availableSeats === 0 ? 'Sold Out' : 'Book Now'}
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FlightsPage;






import React, { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const allowedCities = ['Mumbai', 'Bangalore', 'Pune', 'Delhi', 'Belagavi', 'Chennai'];

const FlightsPage = () => {
  const [flights, setFlights] = useState([]);
  const [fromSearch, setFromSearch] = useState('');
  const [toSearch, setToSearch] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    API.get('/flights')
      .then(res => {
        setFlights(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load flights.');
        setLoading(false);
      });
  }, []);

  const filteredFlights = flights.filter(flight => {
    if (!fromSearch && !toSearch) return true;
    if (fromSearch && !allowedCities.includes(fromSearch)) return false;
    if (toSearch && !allowedCities.includes(toSearch)) return false;

    const fromMatch = fromSearch ? flight.departure === fromSearch : true;
    const toMatch = toSearch ? flight.arrival === toSearch : true;
    return fromMatch && toMatch;
  });

  const handleBookingClick = (flight) => {
    if (!date) {
      alert('Please select a flight date before booking.');
      return;
    }

    const params = new URLSearchParams({
      flightId: flight._id,
      airline: flight.airline,
      from: flight.departure,
      to: flight.arrival,
      date,
    }).toString();

    navigate(`/booking?${params}`);
  };

  // Inline CSS styles
  const styles = {
    page: {
      minHeight: '100vh',
      padding: '40px 24px',
      background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    container: {
      maxWidth: '960px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '2.75rem',
      fontWeight: '800',
      color: '#1e3a8a', // blue-900
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#1e40af', // blue-700
      maxWidth: '600px',
      margin: '0 auto',
    },
    filters: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      maxWidth: '400px',
      margin: '0 auto 40px',
      justifyContent: 'center',
    },
    selectInput: {
      flex: '1 1 140px',
      padding: '12px',
      borderRadius: '8px',
      border: '1.5px solid #93c5fd', // blue-300
      boxShadow: '0 2px 6px rgba(59, 130, 246, 0.2)', // blue shadow
      fontSize: '1rem',
      color: '#1e3a8a',
      backgroundColor: 'white',
      cursor: 'pointer',
      outline: 'none',
      appearance: 'none',
    },
    dateInput: {
      flex: '1 1 140px',
      padding: '12px',
      borderRadius: '8px',
      border: '1.5px solid #93c5fd',
      boxShadow: '0 2px 6px rgba(59, 130, 246, 0.2)',
      fontSize: '1rem',
      color: '#1e3a8a',
      backgroundColor: 'white',
      outline: 'none',
    },
    message: {
      textAlign: 'center',
      fontSize: '1.25rem',
      fontWeight: '600',
      marginTop: '60px',
      color: error ? '#dc2626' : '#6b7280', // red-600 or gray-500
    },
    flightList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      maxWidth: '900px',
      margin: '0 auto',
    },
    flightCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.07)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'box-shadow 0.3s ease',
      cursor: 'default',
    },
    flightCardHover: {
      boxShadow: '0 20px 30px rgba(0,0,0,0.12)',
    },
    airlineName: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#1e3a8a',
      marginBottom: '12px',
    },
    flightInfo: {
      fontSize: '1rem',
      color: '#374151',
      marginBottom: '6px',
    },
    footer: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    price: {
      fontWeight: '700',
      fontSize: '1.125rem',
      color: '#2563eb', // blue-600
    },
    bookButton: {
      padding: '10px 20px',
      borderRadius: '10px',
      fontWeight: '700',
      fontSize: '1rem',
      border: 'none',
      cursor: 'pointer',
      color: 'white',
      backgroundColor: '#4f46e5', // indigo-600
      transition: 'background-color 0.3s ease',
    },
    bookButtonDisabled: {
      backgroundColor: '#9ca3af', // gray-400
      cursor: 'not-allowed',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Available Flights</h1>
          <p style={styles.subtitle}>
            Search flights by departure and destination cities (restricted to selected cities).
          </p>
        </header>

        <div style={styles.filters}>
          <select
            style={styles.selectInput}
            value={fromSearch}
            onChange={e => setFromSearch(e.target.value)}
            aria-label="Departure city"
          >
            <option value="">From (Departure city)</option>
            {allowedCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <select
            style={styles.selectInput}
            value={toSearch}
            onChange={e => setToSearch(e.target.value)}
            aria-label="Destination city"
          >
            <option value="">To (Destination city)</option>
            {allowedCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <input
            type="date"
            style={styles.dateInput}
            value={date}
            onChange={e => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            aria-label="Flight date"
          />
        </div>

        {loading ? (
          <div style={{...styles.message, color: '#3b82f6'}} /* blue-500 */>
            Loading flights...
          </div>
        ) : error ? (
          <div style={styles.message}>{error}</div>
        ) : filteredFlights.length === 0 ? (
          <div style={styles.message}>
            No flights found {fromSearch && `from "${fromSearch}"`} {toSearch && `to "${toSearch}"`}.
          </div>
        ) : (
          <ul style={styles.flightList}>
            {filteredFlights.map(flight => (
              <li
                key={flight._id}
                style={styles.flightCard}
                onMouseEnter={e => e.currentTarget.style.boxShadow = styles.flightCardHover.boxShadow}
                onMouseLeave={e => e.currentTarget.style.boxShadow = styles.flightCard.boxShadow}
              >
                <div>
                  <h2 style={styles.airlineName}>{flight.airline}</h2>
                  <p style={styles.flightInfo}><strong>From:</strong> {flight.departure}</p>
                  <p style={styles.flightInfo}><strong>To:</strong> {flight.arrival}</p>
                  <p style={styles.flightInfo}><strong>Available Seats:</strong> {flight.availableSeats}</p>
                </div>
                <div style={styles.footer}>
                  <div style={styles.price}>₹ {flight.price.toLocaleString()}</div>
                  <button
                    onClick={() => handleBookingClick(flight)}
                    disabled={flight.availableSeats === 0}
                    style={{
                      ...styles.bookButton,
                      ...(flight.availableSeats === 0 ? styles.bookButtonDisabled : {}),
                    }}
                  >
                    {flight.availableSeats === 0 ? 'Sold Out' : 'Book Now'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FlightsPage;
