
// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';

// const HomePage = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const styles = {
//     container: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #f0f4ff, #d9e2ff)', // subtle blue gradient background
//       color: '#1e293b', // slate-800 dark text for modern look
//       paddingTop: '5.5rem',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       textAlign: 'center',
//       padding: '4rem 2rem',
//     },
//     heading: {
//       fontSize: '3.75rem',
//       fontWeight: '800',
//       marginBottom: '1rem',
//       color: '#2563eb', // blue-600
//       letterSpacing: '0.07em',
//       textShadow: '0 2px 8px rgba(37, 99, 235, 0.3)',
//     },
//     subheading: {
//       fontSize: '1.375rem',
//       maxWidth: '580px',
//       marginBottom: '3.5rem',
//       lineHeight: '1.7',
//       color: '#475569', // slate-600
//       fontWeight: '500',
//     },
//     buttonBase: {
//       backgroundColor: '#2563eb', // blue-600
//       color: '#fff',
//       border: 'none',
//       padding: '1.25rem 3.5rem',
//       fontSize: '1.25rem',
//       borderRadius: '0.5rem', // 8px radius for smoothness
//       cursor: 'pointer',
//       boxShadow: '0 6px 15px rgba(37, 99, 235, 0.4)',
//       transition: 'background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
//       fontWeight: '700',
//       letterSpacing: '0.08em',
//       userSelect: 'none',
//     },
//     buttonHover: {
//       backgroundColor: '#1e40af', // blue-800 darker shade
//       transform: 'translateY(-4px)',
//       boxShadow: '0 10px 25px rgba(30, 64, 175, 0.6)',
//     },
//     linkReset: {
//       textDecoration: 'none',
//     },
//   };

//   const combinedButtonStyle = {
//     ...styles.buttonBase,
//     ...(isHovered ? styles.buttonHover : {}),
//   };

//   return (
//     <>
//       <Navbar />
//       <main style={styles.container}>
//         <h1 style={styles.heading}>Fly Smart, Fly Easy</h1>
//         <p style={styles.subheading}>
//           Discover and book the best flights effortlessly. Trusted by thousands of travelers worldwide for a seamless experience.
//         </p>
//         <a href="/flights" style={styles.linkReset}>
//           <button
//             style={combinedButtonStyle}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             aria-label="Book Your Flight"
//           >
//             Book Your Flight
//           </button>
//         </a>
//       </main>
//     </>
//   );
// };

// export default HomePage;





import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/airplane-flying-up-sky-with-beautiful-blue-sky.jpg';


const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: '#fff',
      paddingTop: '5.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: 'center',
      padding: '4rem 2rem',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.45)',
      zIndex: 0,
    },
    content: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '700px',
      width: '100%',
    },
    heading: {
      fontSize: '3.75rem',
      fontWeight: '800',
      marginBottom: '1rem',
      color: 'rgba(11, 242, 230, 1)',
      letterSpacing: '0.07em',
      textShadow: '0 2px 12px rgba(245, 178, 35, 0.9)',
    },
    subheading: {
      fontSize: '1.375rem',
      marginBottom: '3.5rem',
      lineHeight: '1.7',
      color: 'rgba(10, 251, 175, 0.93)',
      fontWeight: '500',
      textShadow: '0 1px 8px rgba(241, 196, 35, 0.86)',
    },
    buttonBase: {
      backgroundColor: '#2563eb',
      color: '#fff',
      border: 'none',
      padding: '1.25rem 3.5rem',
      fontSize: '1.25rem',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      boxShadow: '0 6px 15px rgba(37, 99, 235, 0.6)',
      transition: 'background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
      fontWeight: '700',
      letterSpacing: '0.08em',
      userSelect: 'none',
    },
    buttonHover: {
      backgroundColor: '#1e40af',
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 25px rgba(30, 64, 175, 0.8)',
    },
    linkReset: {
      textDecoration: 'none',
    },
  };

  const combinedButtonStyle = {
    ...styles.buttonBase,
    ...(isHovered ? styles.buttonHover : {}),
  };

  return (
    <>
      <Navbar />
      <main style={styles.container}>
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <h1 style={styles.heading}>Fly Smart, Fly Easy</h1>
          <p style={styles.subheading}>
            Discover and book the best flights effortlessly. Trusted by thousands of travelers worldwide for a seamless experience.
          </p>
          <a href="/flights" style={styles.linkReset}>
            <button
              style={combinedButtonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-label="Book Your Flight"
            >
              Book Your Flight
            </button>
          </a>
        </div>
      </main>
    </>
  );
};

export default HomePage;
