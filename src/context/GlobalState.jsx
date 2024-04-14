import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

const StateProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [weatherDetails, setWeatherDetails] = useState();
  const [forecastData, setForecastData] = useState();

  const [selectedCity, setSelectedCIty] = useState(null);
  console.log("weather =", weatherDetails);
  console.log("forecast =", forecastData);

  return (
    <WeatherContext.Provider
      value={{
        cities,
        setCities,
        weatherDetails,
        setWeatherDetails,
        selectedCity,
        setSelectedCIty,
        forecastData,
        setForecastData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
export const WeatherState = () => {
  return useContext(WeatherContext);
};
export default StateProvider;
