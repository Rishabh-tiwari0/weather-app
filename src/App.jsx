import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";
import { WeatherState } from "./context/GlobalState";
import ForeCast from "./components/ForeCast";

function App() {
  const {
    weatherDetails,
    setWeatherDetails,
    setCities,
    forecastData,
    setForecastData,
  } = WeatherState();

  const weather_API_KEY = "9a444e0e0bbfefd73329196d607293ad";
  const fetchDetails = async (lat, lon) => {
    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_API_KEY}&units=metric`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weather_API_KEY}&units=metric`
        ),
      ]);

      setWeatherDetails(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setCities("");
    } catch (error) {
      console.error("Error fetching weather details:", error);
    }
  };

  return (
    <div
      className={`box-border w-screen h-screen flex justify-center items-center bg-slate-700 `}
    >
      <div className={`w-11/12 h-screen`}>
        <Search fetchDetails={fetchDetails} />
        {weatherDetails && <WeatherCard data={weatherDetails} />}
        {forecastData && <ForeCast data={forecastData} />}
      </div>
    </div>
  );
}

export default App;
