import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "2b57e8c8e53ab345628a7d30def85137";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div class="row">
        <div class="col-2">
          <div className="weather-forecast-date">Saturday</div>
          <WeatherIcon code="01d" size={36} />
          <span>
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">18° |</span>
              <span className="weather-forecast-temperature-min"> 12°</span>
            </div>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
