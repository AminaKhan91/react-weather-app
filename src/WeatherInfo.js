import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <ul>
          <li className="date">
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description} </li>
        </ul>
      </div>

      <h1>{props.data.city}</h1>

      <div className="row">
        <div className="col-md-lg-6 justify-content-md-lg-center">
          <div className="clear-fix weather-temperature">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          Max Temp: {Math.round(props.data.maxTemp)}°C
        </div>
        <div className="col-4">Humidity: {props.data.humidity}%</div>
        <div className="col-4">Wind: {Math.round(props.data.wind)} km/h</div>
      </div>
    </div>
  );
}
