
// import React, { useState } from 'react';
// import API from '../api';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// const RegisterPage = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     API.post('/auth/register', form)
//       .then(() => navigate('/login'))
//       .catch(err => {
//         console.error(err);
//         alert(err.response?.data?.message || 'Registration failed');
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div style={{ paddingTop: '6rem' }}>
//         <form onSubmit={handleSubmit}>
//           <input name="name" placeholder="Name" onChange={handleChange} required />
//           <input name="email" placeholder="Email" onChange={handleChange} required />
//           <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default RegisterPage;





import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    API.post('/auth/register', form)
      .then(() => {
        alert('Registration successful! Please login.');
        navigate('/login');
      })
      .catch(err => {
        console.error(err);
        alert(err.response?.data?.message || 'Registration failed');
      });
  };

  return (
    <>
      <Navbar />
      <style>{`
        .register-container {
          max-width: 480px;
          margin: 60px auto;
          padding: 40px 30px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .register-container h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #1f2a60;
          font-weight: 600;
          font-size: 28px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        input {
          padding: 12px 14px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 6px;
          transition: border-color 0.2s ease-in-out;
        }

        input:focus {
          border-color: #007bff;
          outline: none;
        }

        button {
          padding: 12px;
          background-color: #007bff;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          font-weight: 600;
        }

        button:hover {
          background-color: #0056b3;
        }

        .login-link {
          margin-top: 20px;
          text-align: center;
          font-size: 14px;
          color: #333;
        }

        .login-link span {
          color: #007bff;
          cursor: pointer;
          font-weight: 500;
        }

        .login-link span:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="register-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p className="login-link">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')}>Login here</span>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;
