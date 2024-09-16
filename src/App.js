import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import "./styles/App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // Dummy data
  const dummyWeather = {
    temp: 20,
    humidity: 65,
    wind: 5,
    description: "clear sky",
    icon: "01d",
  };

  const dummyForecast = [
    { date: "2024-09-17", description: "clear sky", tempHigh: 22, tempLow: 14 },
    {
      date: "2024-09-18",
      description: "few clouds",
      tempHigh: 21,
      tempLow: 15,
    },
    {
      date: "2024-09-19",
      description: "scattered clouds",
      tempHigh: 20,
      tempLow: 16,
    },
    {
      date: "2024-09-20",
      description: "broken clouds",
      tempHigh: 19,
      tempLow: 17,
    },
    { date: "2024-09-21", description: "rain", tempHigh: 18, tempLow: 16 },
  ];

  const fetchWeatherData = () => {
    // Using dummy data
    setWeather(dummyWeather);
    setForecast(dummyForecast);
  };

  return (
    <div className="app">
      <SearchBar onSearch={fetchWeatherData} />
      {weather && <WeatherCard weather={weather} />}
      {forecast && <ForecastCard forecast={forecast} />}
    </div>
  );
};

export default App;
