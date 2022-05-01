import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://gracious-euclid-fb1db5.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Amina Khan{" "}
          </a>{" "}
          and is
          <a
            href="
          https://github.com/AminaKhan91/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
