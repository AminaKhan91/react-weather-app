import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

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

  if (loaded) {
    let styles = {
      backgroundColor:
        "linear-gradient(-225deg, #5d9fff 0%, #b8dcff 48%, #6bbbff 100%);",
    };

    let weatherIcon = "";
    if (
      //sunny
      WeatherIcon.icon === "01d" ||
      WeatherIcon.icon === "01n" ||
      WeatherIcon.icon === "02d" ||
      WeatherIcon.icon === "02n"
    ) {
      styles.backgroundColor = "#f5d98e";
    } else {
      if (
        //clouds
        WeatherIcon.icon === "03d" ||
        WeatherIcon.icon === "03n" ||
        WeatherIcon.icon === "04d" ||
        WeatherIcon.icon === "04n"
      ) {
        styles.backgroundColor = "#CECECE";
      } else {
        if (
          //rain
          WeatherIcon.icon === "09d" ||
          WeatherIcon.icon === "09n" ||
          WeatherIcon.icon === "10d" ||
          WeatherIcon.icon === "10n"
        ) {
          styles.backgroundColor = "#BBD5ED";
        } else {
          if (
            //snow & mist
            WeatherIcon.icon === "13d" ||
            WeatherIcon.icon === "13n" ||
            WeatherIcon.icon === "50d" ||
            WeatherIcon.icon === "50n"
          ) {
            styles.backgroundColor = "#D6E3F8";
          } else {
            if (
              //thunderstorm
              WeatherIcon.icon === "11d" ||
              WeatherIcon.icon === "11n"
            ) {
              styles.backgroundColor = "purple";
            }
          }
        }
      }
    }
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if ((index < 7) & (index > 0)) {
              return (
                <div className="col-2" key={index}>
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
    let apiKey = "2b57e8c8e53ab345628a7d30def85137";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
