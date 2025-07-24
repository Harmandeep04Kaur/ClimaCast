
import React, { useState } from 'react';
import axios from 'axios';

export default function CompareWeather() {
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');
  const [weather1, setWeather1] = useState(null);
  const [weather2, setWeather2] = useState(null);

  const apiKey = '8af3a1ed78b3461f9f4dcd3ac765ecbf';

  const fetchWeather = async (city, setWeather) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      alert(`Could not fetch weather for ${city}`);
    }
  };

  const handleCompare = () => {
    fetchWeather(city1, setWeather1);
    fetchWeather(city2, setWeather2);
  };

  return (
    <div style={styles.container}>
      <h2>Compare Weather Between Cities</h2>
      <div style={styles.inputRow}>
        <input
          style={styles.input}
          value={city1}
          placeholder="Enter City 1"
          onChange={(e) => setCity1(e.target.value)}
        />
        <input
          style={styles.input}
          value={city2}
          placeholder="Enter City 2"
          onChange={(e) => setCity2(e.target.value)}
        />
        <button onClick={handleCompare} style={styles.button}>Compare</button>
      </div>

      <div style={styles.cardContainer}>
        {weather1 && <WeatherCard data={weather1} />}
        {weather2 && <WeatherCard data={weather2} />}
      </div>
    </div>
  );
}

function WeatherCard({ data }) {
  return (
    <div style={styles.card}>
      <h3>{data.name}</h3>
      <p><b>Temperature:</b> {data.main.temp}°C</p>
      <p><b>Feels Like:</b> {data.main.feels_like}°C</p>
      <p><b>Humidity:</b> {data.main.humidity}%</p>
      <p><b>Weather:</b> {data.weather[0].description}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
    background: '#e0f7fa',
    borderRadius: '12px',
    marginTop: '2rem',
  },
  inputRow: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  input: {
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    width: '200px',
  },
  button: {
    padding: '0.6rem 1.5rem',
    backgroundColor: '#00bcd4',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  cardContainer: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '12px',
    width: '240px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
};



