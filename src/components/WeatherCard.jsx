import { WeatherState } from "../context/GlobalState";

const WeatherCard = ({ data }) => {
  const { selectedCity } = WeatherState();
  return (
    <div
      className={` w-80 border-2 border-gray-400 bg-slate-800 text-white rounded-md shadow-xl shadow-slate-600 mt-8 ml-auto mr-auto p-5`}
    >
      <div className={`flex justify-between items-center`}>
        <div>
          <p className={`font-semibold leading-none tracking-wide text-lg`}>
            {selectedCity}
          </p>
          <p className={`font-normal text-sm leading-none text-gray-100`}>
            {data.weather[0].description}
          </p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className={`w-28`}
        />
      </div>
      {/* bottom segment start */}
      <div className={`flex justify-between items-center`}>
        {/* temprature */}
        <div className={`font-semibold text-7xl tracking-tighter mr-2 `}>
          {`${Math.round(data.main.temp)}`}°C
        </div>
        {/* deatils components */}
        <div className={`w-full pl-5`}>
          <div>
            <span
              className={`font-bold border-b
            `}
            >
              Details
            </span>
          </div>
          <div className={`flex justify-between`}>
            <span
              className={`text-left font-normal
            text-xs`}
            >
              Feels Like
            </span>
            <span className={`text-right font-semibold text-xs`}>
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className={`flex justify-between`}>
            <span
              className={`text-left font-normal
            text-xs`}
            >
              Wind
            </span>
            <span className={`text-right font-semibold text-xs`}>
              {Math.round(data.wind.speed)}m/s
            </span>
          </div>
          <div className={`flex justify-between`}>
            <span
              className={`text-left font-normal
            text-xs`}
            >
              Humidity
            </span>
            <span className={`text-right font-semibold text-xs`}>
              {data.main.humidity}%
            </span>
          </div>
          <div className={`flex justify-between`}>
            <span
              className={`text-left font-normal
            text-xs`}
            >
              Pressure
            </span>
            <span className={`text-right font-semibold text-xs`}>
              {data.main.pressure}hpa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
