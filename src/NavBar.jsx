import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './auth/auth';

export default function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); 
    navigate('/signin');
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>ClimaCast ☁️</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/weather" style={styles.link}>Weather</Link>
        <Link to="/compare" style={styles.link}>Compare</Link>

        {!user ? (
          <>
            <Link to="/signin" style={styles.link}>Sign In</Link>
            <Link to="/signup" style={styles.link}>Sign Up</Link>
          </>
        ) : (
          <button onClick={handleLogout} style={styles.button}>Logout</button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#4daed4',
    color: '#fff',
    padding: '1rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    fontFamily: 'Segoe UI, sans-serif',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
  },
  button: {
    background: '#ffffff33',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
  },
};
