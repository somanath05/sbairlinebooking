// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const styles = {
//     nav: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       gap: '3rem',
//       backgroundColor: '#ffffff',
//       padding: '1rem 3rem',
//       position: 'fixed',
//       top: 0,
//       width: '100%',
//       zIndex: 100,
//       boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     },
//     spacer: {
//       height: '6rem', // 👈 This pushes the page content down
//     },
//     navLink: {
//       textDecoration: 'none',
//       color: '#333',
//       fontWeight: '600',
//       fontSize: '1.1rem',
//       padding: '0.5rem 1rem',
//       borderRadius: '8px',
//       transition: 'all 0.3s ease',
//     },
//     navLinkHover: {
//       backgroundColor: '#00bfff',
//       color: '#fff',
//       boxShadow: '0 4px 10px rgba(0,191,255,0.5)',
//       transform: 'translateY(-2px)',
//     },
//   };

//   const handleMouseOver = (e) => {
//     Object.assign(e.target.style, styles.navLinkHover);
//   };

//   const handleMouseOut = (e) => {
//     Object.assign(e.target.style, styles.navLink);
//   };

//   return (
//     <>
//       <nav style={styles.nav}>
//         {['Home', 'Flights', 'Login', 'Register'].map((label) => (
//           <Link
//             key={label}
//             to={`/${label.toLowerCase()}`}
//             style={styles.navLink}
//             onMouseOver={handleMouseOver}
//             onMouseOut={handleMouseOut}
//           >
//             {label}
//           </Link>
//         ))}
//       </nav>
//       <div style={styles.spacer} /> {/* 👈 Push content down */}
//     </>
//   );
// };

// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '3rem',
      backgroundColor: '#ffffff',
      padding: '1rem 3rem',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    spacer: {
      height: '6rem', // Pushes page content down
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: '600',
      fontSize: '1.1rem',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    navLinkHover: {
      backgroundColor: '#00bfff',
      color: '#fff',
      boxShadow: '0 4px 10px rgba(0,191,255,0.5)',
      transform: 'translateY(-2px)',
    },
  };

  const handleMouseOver = (e) => {
    Object.assign(e.target.style, styles.navLinkHover);
  };

  const handleMouseOut = (e) => {
    Object.assign(e.target.style, styles.navLink);
  };

  return (
    <>
      <nav style={styles.nav}>
        {['Home', 'Flights', 'Login', 'Register'].map((label) => (
          <Link
            key={label}
            to={`/${label.toLowerCase()}`}
            style={styles.navLink}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div style={styles.spacer} /> {/* 👈 Push content down so it's visible */}
    </>
  );
};

export default Navbar;
