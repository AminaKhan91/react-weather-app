import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "2b57e8c8e53ab345628a7d30def85137";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if ((index < 7) & (index > 0)) {
              let styles = {
                backgroundColor: "#ff9a3c",
              };

              if (
                //sunny
                dailyForecast.weather[0].icon === "01d" ||
                dailyForecast.weather[0].icon === "01n" ||
                dailyForecast.weather[0].icon === "02d" ||
                dailyForecast.weather[0].icon === "02n"
              ) {
                styles.backgroundColor = "#f5d98e";
              } else if (
                //clouds
                dailyForecast.weather[0].icon === "03d" ||
                dailyForecast.weather[0].icon === "03n" ||
                dailyForecast.weather[0].icon === "04d" ||
                dailyForecast.weather[0].icon === "04n"
              ) {
                styles.backgroundColor = "#CECECE";
              } else if (
                //rain
                dailyForecast.weather[0].icon === "09d" ||
                dailyForecast.weather[0].icon === "09n" ||
                dailyForecast.weather[0].icon === "10d" ||
                dailyForecast.weather[0].icon === "10n"
              ) {
                styles.backgroundColor = "#BBD5ED";
              } else if (
                //snow & mist
                dailyForecast.weather[0].icon === "13d" ||
                dailyForecast.weather[0].icon === "13n" ||
                dailyForecast.weather[0].icon === "50d" ||
                dailyForecast.weather[0].icon === "50n"
              ) {
                styles.backgroundColor = "#D6E3F8";
              } else if (
                //thunderstorm
                dailyForecast.weather[0].icon === "11d" ||
                dailyForecast.weather[0].icon === "11n"
              ) {
                styles.backgroundColor = "#8ca3a3";
              }
              return (
                <div className="col-2" key={index} style={styles}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
