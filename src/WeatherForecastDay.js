import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function fahrenheitMaxTemp() {
    let temperature = Math.round((props.data.temp.max * 9) / 5 + 32);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function fahrenheitMinTemp() {
    let temperature = Math.round((props.data.temp.min * 9) / 5 + 32);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  if (props.unit === "celsius") {
    return (
      <div>
        <div className="Week-day"> {day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={45} />
        <div>
          <span className="max-temp"> {maxTemperature()}°C </span>
          <span className="max-temp"> {minTemperature()}°C </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="weather-forecast-date">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <span>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max">
              {fahrenheitMaxTemp()}°F |
            </span>
            <span className="weather-forecast-temperature-min">
              {" "}
              {fahrenheitMinTemp()}°F
            </span>
            <span className="max"> Max |</span>{" "}
            <span className="min"> Min</span>
          </div>{" "}
        </span>
      </div>
    );
  }
}
