import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './auth/auth';

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div style={styles.container}>
      <div style={styles.cloudOverlay}>
        <h1 style={styles.title}>☁️ Welcome to ClimaCast</h1>
        <p style={styles.subtitle}>Cloudy skies or breaking news — we bring it all to your screen.</p>
    
      </div>
    </div>
  );
}

const backgroundUrl = 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1400&q=80';

const styles = {
  container: {
    backgroundImage: `linear-gradient(rgba(187, 212, 233, 0.6), rgba(187, 212, 233, 0.8)), url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Segoe UI', sans-serif",
  },
  cloudOverlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '3rem',
    borderRadius: '25px',
    textAlign: 'center',
    maxWidth: '600px',
    color: '#333',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#2b2d42',
    textShadow: '0 1px 3px rgba(255,255,255,0.7)',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#4f5d75',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#89c2d9',
    color: '#fff',
    padding: '0.7rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    transition: 'all 0.2s ease',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    border: '2px solid #89c2d9',
    color: '#89c2d9',
    padding: '0.7rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.2s ease',
  },
};





