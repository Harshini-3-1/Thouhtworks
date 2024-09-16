import React from "react";
import { FaSun, FaCloud, FaCloudRain, FaSnowflake } from "react-icons/fa";

const WeatherCard = ({ weather }) => {
  const { temp, humidity, wind, description } = weather;

  const getWeatherIcon = () => {
    switch (description) {
      case "clear sky":
        return <FaSun />;
      case "few clouds":
      case "scattered clouds":
      case "broken clouds":
        return <FaCloud />;
      case "rain":
        return <FaCloudRain />;
      case "snow":
        return <FaSnowflake />;
      default:
        return <FaCloud />;
    }
  };

  return (
    <div className="weather-card">
      {getWeatherIcon()}
      <h2>{temp}°C</h2>
      <p>{description}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {wind} m/s</p>
    </div>
  );
};

export default WeatherCard;
