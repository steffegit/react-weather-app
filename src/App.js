import { useState } from "react";

function App() {
  const api_key = process.env.REACT_APP_API_KEY;
  const base_url = "https://api.openweathermap.org/data/2.5/";

  const [query, setQuery] = useState("");
  // const [weather, setWeather] = useState({});
  const [weather, setWeather] = useState({
    coord: {
      lon: -122.08,
      lat: 37.39,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 282.55,
      feels_like: 281.86,
      temp_min: 280.37,
      temp_max: 284.26,
      pressure: 1023,
      humidity: 100,
    },
    visibility: 10000,
    wind: {
      speed: 1.5,
      deg: 350,
    },
    clouds: {
      all: 1,
    },
    dt: 1560350645,
    sys: {
      type: 1,
      id: 5122,
      message: 0.0139,
      country: "US",
      sunrise: 1560343627,
      sunset: 1560396563,
    },
    timezone: -25200,
    id: 420006353,
    name: "Mountain View",
    cod: 200,
  });

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
  // let date = new Date().toLocaleDateString("ro-RO");

  return (
    <div className="w-full flex flex-col items-center justify-center pt-10 space-y-6 sm:space-y-10 p-8">
      <div className="w-full max-w-3xl flex justify-between text-2xl">
        <a href="/">React Weather</a>
        <a
          target="__blank"
          href="https://github.com/CodexDevv/react-weather-app"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-10"
          >
            <g
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <path strokeLinejoin="round" d="M7 8l-4 4 4 4" />
              <path d="M10.5 18l3-12" />
              <path strokeLinejoin="round" d="M17 8l4 4-4 4" />
            </g>
          </svg>
        </a>
      </div>
      <div className="w-full bg-gray-200 rounded-full max-w-3xl flex ring-1 ring-gray-300 shadow-sm">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="w-6 ml-3 -mr-1"
          >
            <g
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M20 20l-6-6" />
              <path d="M15 9.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
            </g>
          </svg>
        </div>
        <input
          type="text"
          className="w-full bg-transparent py-2 px-4 border-none outline-none transition-all "
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {typeof weather.main != "undefined" ? (
        <div className="flex flex-col space-y-8 w-full max-w-3xl bg-gray-100 px-6 py-12 pt-6 rounded-lg ring-1 ring-gray-300 shadow-sm">
          <div className="opacity-70 text-center pb-6 sm:text-start sm:p-0">
            Current Weather
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1 gap-4 sm:pl-4">
            <div className="flex flex-col gap-4">
              <div className="text-xl font-bold">{weather.name}</div>
              <div className="flex space-x-2 items-center">
                <div>
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  />
                </div>
                <div className="text-5xl">
                  {Math.round(weather.main.temp)}°C
                </div>
              </div>
              <div className="text-xl font-bold capitalize">
                {weather.weather[0].description}
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div>Feels like {Math.round(weather.main.feels_like)}°C</div>
              <div className="flex space-x-4 pb-4">
                <div className="flex space-x-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 20V4m0 0l6 6m-6-6l-6 6"
                      />
                    </svg>
                  </div>
                  <div className="font-semibold">
                    {Math.round(weather.main.temp_max)}°C
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6"
                    >
                      <g
                        xmlns="http://www.w3.org/2000/svg"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <path d="M12 4v16M6 14l6 6 6-6" />
                      </g>
                    </svg>
                  </div>
                  <div className="font-semibold">
                    {Math.round(weather.main.temp_min)}°C
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14v.5M12 4c-1.262 1.683-3.055 3.896-4.708 5.896-2.288 2.767-1.796 6.907 1.115 9.009v0a6.137 6.137 0 007.186 0v0c2.91-2.102 3.403-6.242 1.116-9.009C15.055 7.896 13.262 5.683 12 4z"
                    />
                  </svg>
                  <div>Humidity</div>
                </div>
                <div className="font-semibold">{weather.main.humidity}%</div>
              </div>
              <div className="flex space-x-2">
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8h9.11A1.89 1.89 0 0016 6.11v0c0-1.615-1.894-2.486-3.12-1.435L12.5 5M3 12h14.902C19.06 12 20 12.94 20 14.098v0c0 2.152-2.853 2.91-3.92 1.041L16 15M5 16h6.11A1.89 1.89 0 0113 17.89v0c0 1.615-1.894 2.486-3.12 1.435L9.5 19"
                    />
                  </svg>
                  <div>Wind</div>
                </div>
                <div className="font-semibold">{weather.wind.speed} kmh</div>
              </div>
              <div className="flex space-x-2">
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8.5V4m0 0h4.5M4 4l5.5 5.5m10.5-1V4m0 0h-4.5M20 4l-5.5 5.5M4 15.5V20m0 0h4.5M4 20l5.5-5.5m10.5 1V20m0 0h-4.5m4.5 0l-5.5-5.5"
                    />
                  </svg>
                  <div>Pressure</div>
                </div>
                <div className="font-semibold">{weather.main.pressure} Pa</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
