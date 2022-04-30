import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-form">
        <input
          type="search"
          placeholder="Search for a city"
          autofocus="on"
          autocomplete="off"
          id="search-text-input"
          class="text-input"
        />
        <input type="submit" value="Search" className="search" />
        <input type="submit" value="Current" className="location-button" />
      </form>
      <br />
      <div className="overview">
        <ul>
          <li className="date">30 April 2022</li>
          <li className="description">Sunny </li>
        </ul>
      </div>

      <h1>London</h1>

      <div className="row">
        <div className="col-md-lg-6 justify-content-md-lg-center">
          <div className="clear-fix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="cloudy"
              className="float-left"
            />
            <div className="float-left">
              <strong className="temperature">17</strong>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4">Max Temp: 20°C</div>
        <div className="col-4">Humidity: 37%</div>
        <div className="col-4">Wind: 4m/h</div>
      </div>
    </div>
  );
}
