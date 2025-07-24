import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>☁️ ClimaCast &copy; {new Date().getFullYear()} | All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(to right, #dbeafe, #93c5fd)', // Light sky blue gradient
    color: '#1e3a8a', // Deep blue text
    textAlign: 'center',
    padding: '1rem 0',
    marginTop: 'auto',
    boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
    borderTop: '1px solid #cbd5e1',
    fontFamily: "'Segoe UI', sans-serif"
  },
  text: {
    margin: 0,
    fontSize: '1rem',
  },
  brand: {
    fontWeight: 'bold',
    color: '#1e40af',
  }
};
