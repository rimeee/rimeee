import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(`weather`, weather);
  return (
    <div className="weather-box">
      <div>도시 : {weather.name}</div>
      <h2>
        온도 : {weather.main.temp} / 습도 : {weather.main.humidty}
      </h2>
      <h3>현재 날씨 : {weather.weather[0].main}</h3>
    </div>
  );
};

export default WeatherBox;
