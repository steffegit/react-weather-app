import { useState } from "react";

function App() {
  const api_key = "API_KEY_HERE";
  const base_url = "https://api.openweathermap.org/data/2.5/";

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${base_url}weather?q=${query}&units=metric&appid=${api_key}`)
        .then((res) => res.json())
        .then((r) => {
          setWeather(r);
          setQuery("");
          console.log(r);
        });
    }
  };

  let date = new Date().toString().split(" ").splice(1, 3).join("-");

  return (
    <div className="App">
      <div className="mica-effect">
        <div className="search">
          <div className="search-top">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            ></input>
          </div>
          {typeof weather.main != "undefined" ? (
            <div className="weather-info">
              <div className="weather-name">{weather.name}</div>
              <div className="weather-temp">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather-weather">{weather.weather[0].main}</div>
              <hr></hr>
              <span>{date}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
