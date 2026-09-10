import { useState } from "react";
import type { Type } from "../../Type";

type Country = Type & {
  isVisited: boolean;
};

interface CountryType {
  country: Country;
  handleVisited: (name: number) => void;
  handleArrayVisited: (country: Country) => void;
}

function Countries({
  country,
  handleVisited,
  handleArrayVisited,
}: CountryType) {
  const buttonUi: { [key: string]: string } = {
    Asia: "bg-pink-100 text-pink-500",
    Europe: "bg-blue-100 text-blue-500",
    Africa: "bg-green-100 text-green-500",
    "North America": "bg-yellow-100 text-yellow-500",
    "South America": "bg-red-100 text-red-500",
    Oceania: "bg-purple-100 text-purple-500",
    Antarctica: "bg-cyan-100 text-cyan-500",
  };

  const peoplesM = Number((country.population.population / 1000000).toFixed(1));
  const peoplesL = Number((country.population.population / 100000).toFixed(1));
  const peoplesK = Number((country.population.population / 1000).toFixed(1));
  const peoplesH = Number((country.population.population / 1).toFixed());

  const [visit, setVisit] = useState(false);

  const handleCountry = () => {
    if (!country.isVisited) {
      setVisit(true);
      handleVisited(Number(country.ccn3.ccn3));
      handleArrayVisited(country);
    }
  };

  return (
    <div className="group rounded-2xl flex-col justify-between border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div>
        <div className="mb-4 flex h-20 justify-between rounded-xl text-2xl transition ">
          <img
            src={country.flags.flags.png}
            alt=""
            className="max-w-40 group-hover:scale-110 transition-transform duration-200 rounded-xl border"
          />
        </div>

        <h3 className="font-bold text-gray-800 text-xl mb-1">
          {country.name.common}
        </h3>

        <h6 className="text-sm font-semibold text-gray-400 mb-3">
          {country.capital.capital}
        </h6>
        <div className="flex justify-between">
          <span
            className={`p-1 rounded-xl font-mono text-sm ${buttonUi[country.continents.continents[0]]} `}
          >
            {country.continents.continents}
          </span>

          <span className="flex justify-center items-center bg-green-100 px-0.5 rounded-md font-bold">
            👥{" "}
            {peoplesM >= 1
              ? peoplesM + "M"
              : peoplesL >= 1
                ? peoplesL + "L"
                : peoplesK >= 1
                  ? peoplesK + "K"
                  : peoplesH}{" "}
          </span>
        </div>
      </div>

      <button
        onClick={handleCountry}
        className={` block w-full py-2 rounded-lg mt-4 text-sm font-semibold text-blue-500 border hover:bg-blue-400 hover:text-white ${country.isVisited ? "bg-blue-400 text-white" : ""} `}
      >
        {country.isVisited ? "visited" : "Visit"}
      </button>
    </div>
  );
}

export default Countries;
