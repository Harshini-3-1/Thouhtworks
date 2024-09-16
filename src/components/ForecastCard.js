import React from "react";

const ForecastCard = ({ forecast }) => {
  return (
    <div className="forecast-card">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-day">
          <h3>{day.date}</h3>
          <p>{day.description}</p>
          <p>High: {day.tempHigh}°C</p>
          <p>Low: {day.tempLow}°C</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
