import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { WeatherState } from "../context/GlobalState";

const ForeCast = () => {
  const { forecastData } = WeatherState();
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <>
      <div className={`text-2xl font-bold text-white mt-3 mb-2 text-center`}>
        Daily Forecast
      </div>
      <Accordion>
        {forecastData.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div
                  className={`bg-slate-100 rounded-xl h-8 mb-2 p-2 pl-4 sm:h-10 flex items-center cursor-pointer shadow-inner shadow-slate-400`}
                >
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className={`h-6`}
                  />
                  <label
                    className={`text-gray-800 flex-1 font-semibold ml-4 text-sm sm:text-base`}
                  >
                    {forecastDays[index]}
                  </label>
                  <label
                    className={`flex-1 mr-4 text-right text-xs sm:text-base`}
                  >
                    {item.weather[0].description}
                  </label>
                  <label className={`text-gray-500 text-sm sm:text-base`}>
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div
                className={`grid grid-cols-2 grid-rows-3 pt-1 pb-1 pl-4 pr-4 text-xs sm:text-base text-white `}
              >
                <div
                  className={`flex h-7 justify-between pl-6 pr-6 items-center `}
                >
                  <label className={`font-semibold text-gray-200`}>
                    Pressure
                  </label>
                  <label className={`font-semibold text-gray-200`}>
                    {item.main.pressure}
                  </label>
                </div>
                <div
                  className={`flex h-7 justify-between pl-6 pr-6 items-center `}
                >
                  <label className={`font-semibold text-gray-200`}>
                    Humidity:
                  </label>
                  <label className={`font-semibold text-gray-200`}>
                    {item.main.humidity}
                  </label>
                </div>
                <div
                  className={`flex h-7 justify-between pl-6 pr-6 items-center `}
                >
                  <label className={`font-semibold text-gray-200`}>
                    Clouds:
                  </label>
                  <label className={`font-semibold text-gray-200`}>
                    {item.clouds.all}%
                  </label>
                </div>
                <div
                  className={`flex h-7 justify-between pl-6 pr-6 items-center `}
                >
                  <label className={`font-semibold text-gray-200`}>
                    Wind speed:
                  </label>
                  <label className={`font-semibold text-gray-200`}>
                    {Math.round(item.wind.speed)} m/s
                  </label>
                </div>
                <div
                  className={`flex h-7 justify-between pl-6 pr-6 items-center `}
                >
                  <label className={`font-semibold text-gray-200`}>
                    Sea level:
                  </label>
                  <label className={`font-semibold text-gray-200`}>
                    {item.main.sea_level}m
                  </label>
                </div>
                <div
                  className={`flex h-7 justify-between pl-6 pr-6 items-center `}
                >
                  <label className={`font-semibold text-gray-200`}>
                    Feels like:
                  </label>
                  <label className={`font-semibold text-gray-200`}>
                    {Math.round(item.main.feels_like)}°C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForeCast;
