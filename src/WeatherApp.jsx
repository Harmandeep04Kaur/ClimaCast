import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import NewsBox from "./NewBox";
import MapComponent from "./MapComponent";

export default function WeatherApp() {
  const [weatherinfo, setWeatherInfo] = useState({
    Name: "",
    Humditiy: "",
    feelslike: "",
    temp: "",
    tempMin: "",
    tempMax: "",
    description: "",
  });

  const updateWeather = (result) => {
    setWeatherInfo(result);
  };

  const updateCityFromMap = (cityName) => {
    setWeatherInfo((prev) => ({
      ...prev,
      Name: cityName,
    }));
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>🌦️ ClimaCast — Weather & News</h2>

      {/* Map First */}
      <div style={styles.mapSection}>
        <h3 style={styles.subheading}>🗺️ See City from Map</h3>
        <div style={styles.mapBox}>
          <MapComponent city={weatherinfo.Name} onCitySelect={updateCityFromMap} />
        </div>
      </div>

      {/* Search Second */}
      <div style={styles.searchBoxContainer}>
        <SearchBox Updateinfo={updateWeather} />
      </div>

      {/* Weather & News Cards */}
      <div style={styles.cardRow}>
        <div style={styles.card}>
          <InfoBox info={weatherinfo} />
        </div>
        <div style={styles.card}>
          <NewsBox city={weatherinfo.Name} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: `linear-gradient(135deg, #d0e8f2, #f0f4f8)`,
    minHeight: "100vh",
    padding: "2rem 1rem",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#2b2d42",
    marginBottom: "2rem",
  },
  mapSection: {
    textAlign: "center",
    paddingBottom: "2rem",
  },
  subheading: {
    fontSize: "1.8rem",
    color: "#2b2d42",
    fontWeight: "600",
    marginBottom: "1.2rem",
  },
  mapBox: {
    width: "90%",
    maxWidth: "900px",
    height: "400px",
    margin: "0 auto",
    borderRadius: "12px",
    overflow: "hidden",
    border: "2px solid #ccc",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
  },
  searchBoxContainer: {
    maxWidth: "600px",
    margin: "0 auto 2.5rem auto",
  },
  cardRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
    marginTop: "2rem",
  },
  card: {
    background: "#ffffff",
    padding: "1.5rem",
    borderRadius: "16px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    minHeight: "280px",
  },
};






