import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast() {
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
