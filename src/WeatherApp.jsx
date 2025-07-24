import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import NewsBox from "./NewBox";

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

  const UpdateWeather = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>🌦️ ClimaCast — Weather & News</h2>
      <div style={styles.searchBoxContainer}>
        <SearchBox Updateinfo={UpdateWeather} />
      </div>

      <div style={styles.content}>
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
    fontSize: "2.2rem",
    color: "#2b2d42",
    marginBottom: "1.5rem",
  },
  searchBoxContainer: {
    maxWidth: "600px",
    margin: "0 auto 2rem auto",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  card: {
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    width: "100%",
    maxWidth: "400px",
    color: "#2b2d42",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
};




