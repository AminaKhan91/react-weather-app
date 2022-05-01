import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import ReactLoading from "react-loading";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      maxTemp: response.data.main.temp_max,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form">
          <input
            type="search"
            placeholder="Search for a city"
            autoFocus="on"
            autoComplete="off"
            id="search-text-input"
            className="text-input"
          />
          <input type="submit" value="Search" className="search" />
          <input type="submit" value="Current" className="location-button" />
        </form>
        <br />
        <div className="overview">
          <ul>
            <li className="date">
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description} </li>
          </ul>
        </div>

        <h1>{weatherData.city}</h1>

        <div className="row">
          <div className="col-md-lg-6 justify-content-md-lg-center">
            <div className="clear-fix weather-temperature">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong className="temperature">
                  {Math.round(weatherData.temperature)}
                </strong>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            Max Temp: {Math.round(weatherData.maxTemp)}°C
          </div>
          <div className="col-4">Humidity: {weatherData.humidity}%</div>
          <div className="col-4">Wind: {Math.round(weatherData.wind)} km/h</div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2b57e8c8e53ab345628a7d30def85137";

    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiurl).then(handleResponse);

    return (
      <ReactLoading type="bubbles" color="#96C6FF" height={667} width={375} />
    );
  }
}
