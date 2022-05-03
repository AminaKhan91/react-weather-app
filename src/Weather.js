import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import ReactLoading from "react-loading";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      maxTemp: response.data.main.temp_max,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "2b57e8c8e53ab345628a7d30def85137";

    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiurl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    search(city);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a city"
            autoFocus="on"
            autoComplete="off"
            id="search-text-input"
            className="text-input"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="search" />
          <input type="submit" value="Current" className="location-button" />
        </form>
        <br />
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <ReactLoading type="bubbles" color="#96C6FF" height={667} width={375} />
    );
  }
}
