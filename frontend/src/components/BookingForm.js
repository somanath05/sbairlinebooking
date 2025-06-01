
// import React, { useState } from 'react';

// const BookingForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     passengers: 1,
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === 'passengers' ? Math.max(1, Number(value)) : value,
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
//     else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
//     if (!formData.passengers || formData.passengers < 1) newErrors.passengers = 'At least 1 passenger required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setIsSubmitting(true);
//     try {
//       // Pass all validated form data to parent
//       await onSubmit({
//         fullName: formData.fullName.trim(),
//         email: formData.email.trim(),
//         phone: formData.phone.trim(),
//         passengers: formData.passengers,
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6" noValidate>
//       {/* Full Name */}
//       <div>
//         <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//           Full Name
//         </label>
//         <input
//           id="fullName"
//           name="fullName"
//           type="text"
//           value={formData.fullName}
//           onChange={handleChange}
//           aria-invalid={errors.fullName ? 'true' : 'false'}
//           aria-describedby={errors.fullName ? 'fullName-error' : undefined}
//           className={`w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
//             errors.fullName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
//           }`}
//         />
//         {errors.fullName && (
//           <p id="fullName-error" className="text-sm text-red-500 mt-1">
//             {errors.fullName}
//           </p>
//         )}
//       </div>

//       {/* Email */}
//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//           Email
//         </label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           aria-invalid={errors.email ? 'true' : 'false'}
//           aria-describedby={errors.email ? 'email-error' : undefined}
//           className={`w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
//             errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
//           }`}
//         />
//         {errors.email && (
//           <p id="email-error" className="text-sm text-red-500 mt-1">
//             {errors.email}
//           </p>
//         )}
//       </div>

//       {/* Phone */}
//       <div>
//         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//           Phone
//         </label>
//         <input
//           id="phone"
//           name="phone"
//           type="tel"
//           maxLength={10}
//           value={formData.phone}
//           onChange={handleChange}
//           aria-invalid={errors.phone ? 'true' : 'false'}
//           aria-describedby={errors.phone ? 'phone-error' : undefined}
//           className={`w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
//             errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
//           }`}
//         />
//         {errors.phone && (
//           <p id="phone-error" className="text-sm text-red-500 mt-1">
//             {errors.phone}
//           </p>
//         )}
//       </div>

//       {/* Passengers */}
//       <div>
//         <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">
//           Number of Passengers
//         </label>
//         <input
//           id="passengers"
//           name="passengers"
//           type="number"
//           min="1"
//           value={formData.passengers}
//           onChange={handleChange}
//           aria-invalid={errors.passengers ? 'true' : 'false'}
//           aria-describedby={errors.passengers ? 'passengers-error' : undefined}
//           className={`w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
//             errors.passengers ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
//           }`}
//         />
//         {errors.passengers && (
//           <p id="passengers-error" className="text-sm text-red-500 mt-1">
//             {errors.passengers}
//           </p>
//         )}
//       </div>

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition ${
//           isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
//         }`}
//       >
//         {isSubmitting ? 'Booking...' : 'Confirm Booking'}
//       </button>
//     </form>
//   );
// };

// export default BookingForm;




// import React, { useState } from 'react';

// const BookingForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     passengers: 1,
//   });

//   const [errors, setErrors] = useState({});

//   // Basic validation function
//   const validate = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = 'Full Name is required';
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone is required';
//     } else if (!/^\d{7,15}$/.test(formData.phone)) {
//       newErrors.phone = 'Phone must be 7 to 15 digits';
//     }
//     if (!formData.passengers || formData.passengers < 1) {
//       newErrors.passengers = 'At least 1 passenger is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData(prev => ({
//       ...prev,
//       [name]: name === 'passengers' ? Number(value) : value,
//     }));

//     // Clear error on change for this field
//     setErrors(prev => {
//       const copy = { ...prev };
//       delete copy[name];
//       return copy;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validate()) {
//       onSubmit(formData);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} noValidate className="space-y-6 max-w-md">
//       <div>
//         <label htmlFor="fullName" className="block font-semibold mb-1">Full Name *</label>
//         <input
//           type="text"
//           id="fullName"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           className={`w-full p-2 border rounded ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
//           placeholder="Your full name"
//           aria-invalid={!!errors.fullName}
//           aria-describedby="fullName-error"
//           required
//         />
//         {errors.fullName && (
//           <p id="fullName-error" className="text-red-600 text-sm mt-1">{errors.fullName}</p>
//         )}
//       </div>

//       <div>
//         <label htmlFor="email" className="block font-semibold mb-1">Email *</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//           placeholder="you@example.com"
//           aria-invalid={!!errors.email}
//           aria-describedby="email-error"
//           required
//         />
//         {errors.email && (
//           <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>
//         )}
//       </div>

//       <div>
//         <label htmlFor="phone" className="block font-semibold mb-1">Phone *</label>
//         <input
//           type="tel"
//           id="phone"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className={`w-full p-2 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//           placeholder="e.g., 1122334455"
//           aria-invalid={!!errors.phone}
//           aria-describedby="phone-error"
//           required
//         />
//         {errors.phone && (
//           <p id="phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</p>
//         )}
//       </div>

//       <div>
//         <label htmlFor="passengers" className="block font-semibold mb-1">Number of Passengers *</label>
//         <input
//           type="number"
//           id="passengers"
//           name="passengers"
//           value={formData.passengers}
//           onChange={handleChange}
//           min="1"
//           className={`w-full p-2 border rounded ${errors.passengers ? 'border-red-500' : 'border-gray-300'}`}
//           aria-invalid={!!errors.passengers}
//           aria-describedby="passengers-error"
//           required
//         />
//         {errors.passengers && (
//           <p id="passengers-error" className="text-red-600 text-sm mt-1">{errors.passengers}</p>
//         )}
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded transition"
//         aria-label="Confirm Booking"
//       >
//         Confirm Booking
//       </button>
//     </form>
//   );
// };

// export default BookingForm;







import React, { useState } from 'react';

const styles = {
  form: {
    maxWidth: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  fieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 600,
    marginBottom: 6,
    color: '#1e3a8a', // blue-900
  },
  input: {
    padding: 10,
    borderRadius: 8,
    border: '1.5px solid #cbd5e1', // gray-300
    fontSize: 16,
    color: '#1e3a8a',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  },
  inputError: {
    borderColor: '#dc2626', // red-600
  },
  errorText: {
    color: '#dc2626',
    fontSize: 13,
    marginTop: 4,
  },
  button: {
    padding: 12,
    backgroundColor: '#4f46e5', // indigo-600
    color: '#fff',
    fontWeight: 600,
    borderRadius: 8,
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#4338ca', // indigo-700
  },
};

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    passengers: 1,
  });
  const [errors, setErrors] = useState({});
  const [isHover, setIsHover] = useState(false);

  // Basic validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 7 to 15 digits';
    }
    if (!formData.passengers || formData.passengers < 1) {
      newErrors.passengers = 'At least 1 passenger is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: name === 'passengers' ? Number(value) : value,
    }));

    // Clear error on change for this field
    setErrors(prev => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={styles.form}>
      <div style={styles.fieldWrapper}>
        <label htmlFor="fullName" style={styles.label}>
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your full name"
          required
          aria-invalid={!!errors.fullName}
          aria-describedby="fullName-error"
          style={{
            ...styles.input,
            ...(errors.fullName ? styles.inputError : {}),
          }}
        />
        {errors.fullName && (
          <p id="fullName-error" style={styles.errorText}>
            {errors.fullName}
          </p>
        )}
      </div>

      <div style={styles.fieldWrapper}>
        <label htmlFor="email" style={styles.label}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
          style={{
            ...styles.input,
            ...(errors.email ? styles.inputError : {}),
          }}
        />
        {errors.email && (
          <p id="email-error" style={styles.errorText}>
            {errors.email}
          </p>
        )}
      </div>

      <div style={styles.fieldWrapper}>
        <label htmlFor="phone" style={styles.label}>
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g., 1122334455"
          required
          aria-invalid={!!errors.phone}
          aria-describedby="phone-error"
          style={{
            ...styles.input,
            ...(errors.phone ? styles.inputError : {}),
          }}
        />
        {errors.phone && (
          <p id="phone-error" style={styles.errorText}>
            {errors.phone}
          </p>
        )}
      </div>

      <div style={styles.fieldWrapper}>
        <label htmlFor="passengers" style={styles.label}>
          Number of Passengers *
        </label>
        <input
          type="number"
          id="passengers"
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          min="1"
          required
          aria-invalid={!!errors.passengers}
          aria-describedby="passengers-error"
          style={{
            ...styles.input,
            ...(errors.passengers ? styles.inputError : {}),
          }}
        />
        {errors.passengers && (
          <p id="passengers-error" style={styles.errorText}>
            {errors.passengers}
          </p>
        )}
      </div>

      <button
        type="submit"
        aria-label="Confirm Booking"
        style={isHover ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
