// import React from 'react';
// import { Link } from 'react-router-dom';
// import { PlaneTakeoff, MapPin, IndianRupee } from 'lucide-react';

// const FlightCard = ({ flight }) => {
//   const { _id, airline, departure, arrival, price } = flight;

//   return (
//     <div className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition-shadow border border-gray-100">
//       <div className="flex items-center justify-between mb-3">
//         <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
//           <PlaneTakeoff className="text-blue-500" size={20} />
//           {airline}
//         </h3>
//       </div>

//       <div className="text-sm text-gray-600 mb-3 flex items-center gap-2">
//         <MapPin className="text-gray-400" size={16} />
//         <span className="font-medium">{departure}</span>
//         <span className="mx-1 text-gray-400">→</span>
//         <span className="font-medium">{arrival}</span>
//       </div>

//       <div className="text-gray-700 font-semibold text-lg mb-4 flex items-center gap-1">
//         <IndianRupee className="text-green-600" size={18} />
//         {price.toLocaleString()}
//       </div>

//       <Link
//         to={`/booking?flightId=${_id}&airline=${encodeURIComponent(airline)}&from=${encodeURIComponent(departure)}&to=${encodeURIComponent(arrival)}&price=${price}`}
//         className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition"
//       >
//         Book Now
//       </Link>
//     </div>
//   );
// };

// export default FlightCard;




import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PlaneTakeoff, MapPin } from 'lucide-react';

const FlightCard = ({ flight }) => {
  const { _id, airline, departure, arrival, date } = flight;

  // Encode URL parameters safely
  const bookingUrl = `/booking?flightId=${_id}` +
    `&airline=${encodeURIComponent(airline)}` +
    `&from=${encodeURIComponent(departure)}` +
    `&to=${encodeURIComponent(arrival)}` +
    (date ? `&date=${encodeURIComponent(date)}` : '');

  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition-shadow border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <PlaneTakeoff className="text-blue-500" size={20} />
          {airline}
        </h3>
      </div>

      <div className="text-sm text-gray-600 mb-4 flex items-center gap-2">
        <MapPin className="text-gray-400" size={16} />
        <span className="font-medium">{departure}</span>
        <span className="mx-1 text-gray-400">→</span>
        <span className="font-medium">{arrival}</span>
      </div>

      <Link
        to={bookingUrl}
        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition"
      >
        Book Now
      </Link>
    </div>
  );
};

FlightCard.propTypes = {
  flight: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    airline: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    arrival: PropTypes.string.isRequired,
    date: PropTypes.string, // Optional
  }).isRequired,
};

export default FlightCard;
