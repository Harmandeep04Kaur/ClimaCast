
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./auth/auth";


export default function Signup() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { setUser } = useAuth();  
  const navigate = useNavigate(); 

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    if (email && password) {
      
      setUser({ email });
      navigate('/weather');
    } else {
      alert('Please fill out both fields.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Your ClimaCast Account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.text}>
          Already have an account?{' '}
          <Link to="/signin" style={styles.link}>Sign In</Link>
        </p>
      </div>
    </div>
  );
}

const backgroundUrl =
  'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1400&q=80';

const styles = {
  container: {
    backgroundImage: `linear-gradient(rgba(187, 212, 233, 0.6), rgba(187, 212, 233, 0.8)), url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '2.5rem',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    width: '350px',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  title: {
    color: '#2b2d42',
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.7rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    backgroundColor: '#89c2d9',
    color: '#fff',
    padding: '0.7rem',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  text: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#4f5d75',
  },
  link: {
    color: '#4daed4',
    textDecoration: 'none',
  },
};







