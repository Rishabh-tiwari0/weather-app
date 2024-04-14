import { WeatherState } from "../context/GlobalState";
const SearchList = ({ cities, setCities, setInput, fetchDetails }) => {
  const { setSelectedCIty } = WeatherState();

  return (
    <div
      className={`absolute bg-white top-14 p-2 w-full rounded-lg flex flex-col gap-0 overflow-y-auto sm:w-8/12 `}
    >
      {cities.map((city, index) => {
        return (
          <div
            key={index}
            className={`cursor-pointer hover:bg-slate-200 p-3 flex items-center rounded-md`}
            onClick={() => {
              fetchDetails(city.latitude, city.longitude);
              setSelectedCIty(city.name.toUpperCase());
            }}
          >
            <div className={`font-semibold text-gray-600`}>
              {`${city.name.toUpperCase()}, ${city.country.toUpperCase()}`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchList;
