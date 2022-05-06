import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weather-forecast-date">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <span>
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature-max">
            {maxTemperature()}°C |
          </span>
          <span className="weather-forecast-temperature-min">
            {" "}
            {minTemperature()}°C
          </span>
          <span className="max"> Max |</span> <span className="min"> Min</span>
        </div>{" "}
      </span>
    </div>
  );
}
