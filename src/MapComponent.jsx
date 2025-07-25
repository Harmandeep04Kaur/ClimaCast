import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const MapComponent = ({ city, onCitySelect }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    mapInstance.current = new maplibregl.Map({
      container: mapRef.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=ORUQXRrgxh6pBrxY6dMi`,
      center: [77.2090, 28.6139],
     
    });

    mapInstance.current.on("click", async (e) => {
      const { lng, lat } = e.lngLat;
      const response = await fetch(
        `https://api.maptiler.com/geocoding/${lng},${lat}.json?key=ORUQXRrgxh6pBrxY6dMi`
      );
      const data = await response.json();
      const cityName = data?.features?.[0]?.text;
      if (cityName) {
        onCitySelect(cityName);
      }
    });
  }, []);

  // Forward geocoding: update map center when city changes
  useEffect(() => {
    const fetchCoordinates = async () => {
      if (!city) return;
      const res = await fetch(
        `https://api.maptiler.com/geocoding/${city}.json?key=ORUQXRrgxh6pBrxY6dMi`
      );
      const data = await res.json();
      const coords = data?.features?.[0]?.center;
      if (coords && mapInstance.current) {
        mapInstance.current.flyTo({ center: coords, zoom: 10 });
      }
    };

    fetchCoordinates();
  }, [city]);

  return (
    <div
      ref={mapRef}
      style={{
        height: "400px",
        width: "90%",
        maxWidth: "900px",
        margin: "0 auto",
        borderRadius: "12px",
        border: "2px solid #ccc",
      }}
    />
  );
};

export default MapComponent;

