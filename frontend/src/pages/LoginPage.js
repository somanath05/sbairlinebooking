// // LoginPage.js
// import React, { useState } from 'react';
// import API from '../api';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = e => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     API.post('/auth/login', form)
//       .then(res => {
//         localStorage.setItem('token', res.data.token);
//         navigate('/');
//       })
//       .catch(err => console.error(err));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="email" placeholder="Email" onChange={handleChange} required />
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginPage;






import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    API.post('/auth/login', form)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        navigate('/');
      })
      .catch(err => {
        console.error(err);
        alert(err.response?.data?.message || 'Login failed');
      });
  };

  return (
    <div className="login-page">
      <style>{`
        .login-page {
          max-width: 480px;
          margin: 60px auto;
          padding: 40px 30px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .login-page h2 {
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

        .register-link {
          margin-top: 20px;
          text-align: center;
          font-size: 14px;
          color: #333;
        }

        .register-link span {
          color: #007bff;
          cursor: pointer;
          font-weight: 500;
        }

        .register-link span:hover {
          text-decoration: underline;
        }
      `}</style>

      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Don't have an account?{' '}
        <span onClick={() => navigate('/register')}>Register here</span>
      </p>
    </div>
  );
};

export default LoginPage;
