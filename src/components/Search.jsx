import axios from "axios";
import { useEffect, useState } from "react";
import SearchList from "./SearchList";
import { WeatherState } from "../context/GlobalState";

const Search = ({ fetchDetails }) => {
  const [input, setInput] = useState("");
  const { cities, setCities, selectedCity } = WeatherState();

  const options = {
    method: "GET",

    params: {
      minPopulation: "100000",
      limit: "10",
    },
    headers: {
      "X-RapidAPI-Key": "d60364f97emsh4019f315ba7c004p1cffb8jsn3e2525d49ef9",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const searchCity = async (input) => {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${input}`;
    try {
      const response = await axios.request(url, options);
      setCities(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (input.length > 0) {
      const timer = setTimeout(() => {
        searchCity(input);
      }, 1000);
      console.log(timer);

      return () => clearInterval(timer);
    }
    if (input == "") setCities("");
  }, [input]);

  console.log(cities);
  return (
    <div className={`relative flex justify-center`}>
      <input
        type="text"
        className={`w-full h-9 mt-4 rounded-3xl pl-9 focus:outline-none leading-4 shadow-inner shadow-slate-600 sm:w-8/12 p-1 `}
        placeholder="Search for cities..."
        onChange={(e) => setInput(e.target.value)}
      />

      {cities.length > 0 ? (
        <>
          <SearchList
            cities={cities}
            setCities={setCities}
            setInput={setInput}
            fetchDetails={fetchDetails}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
