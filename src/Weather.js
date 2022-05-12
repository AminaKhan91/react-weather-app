import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import ReactLoading from "react-loading";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      maxTemp: response.data.main.temp_max,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "2b57e8c8e53ab345628a7d30def85137";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiurl).then(handleResponse);
  }

  function currentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function searchLocation(position) {
    let apiKey = "2b57e8c8e53ab345628a7d30def85137";
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    let styles = {
      backgroundColor:
        "linear-gradient(-225deg, #5d9fff 0%, #b8dcff 48%, #6bbbff 100%);",
    };

    if (
      //sunny day
      weatherData.icon === "01d" ||
      weatherData.icon === "02d"
    ) {
      styles.background = "#f5d98e";
    } else if (
      //sunny night
      weatherData.icon === "01n" ||
      weatherData.icon === "02n"
    ) {
      styles.background =
        "linear-gradient(109.6deg, rgb(61, 121, 176) 11.3%, rgb(35, 66, 164) 91.1%)";
    } else if (
      //cloudy day
      weatherData.icon === "03d" ||
      weatherData.icon === "04d"
    ) {
      styles.background = "#CECECE";
    } else if (
      //cloudy night
      weatherData.icon === "03n" ||
      weatherData.icon === "04n"
    ) {
      styles.background = "linear-gradient(to top, #09203f 0%, #537895 100%)";
    } else if (
      //rainy day
      weatherData.icon === "09d" ||
      weatherData.icon === "10d"
    ) {
      styles.background = "#BBD5ED";
    } else if (
      //rainy night
      weatherData.icon === "09n" ||
      weatherData.icon === "10n"
    ) {
      styles.background =
        "linear-gradient(177.9deg, rgb(58, 62, 88) 3.6%, rgb(119, 127, 148) 105.8%)";
    } else if (
      //snowy & misty day
      weatherData.icon === "13d" ||
      weatherData.icon === "50d"
    ) {
      styles.background = "#D6E3F8";
    } else if (
      //snowy and misty night
      weatherData.icon === "13n" ||
      weatherData.icon === "50n"
    ) {
      styles.background = "linear-gradient(to right, #868f96 0%, #596164 100%)";
    } else if (
      //day thunderstorm
      weatherData.icon === "11d"
    ) {
      styles.background = "#8ca3a3";
    } else if (
      //night thunderstorm
      weatherData.icon === "11n"
    ) {
      styles.background =
        "radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)";
    }
    return (
      <div className="Weather" style={styles}>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a city"
            autoFocus="on"
            autoComplete="off"
            className="text-input"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="search" />
          <input
            type="submit"
            value="Current"
            className="location-button"
            onClick={currentPosition}
          />
        </form>
        <br />
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <ReactLoading type="bubbles" color="black" height={667} width={375} className="Loader" />
    );
  }
}
