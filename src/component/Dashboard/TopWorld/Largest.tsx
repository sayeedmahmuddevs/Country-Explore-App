import { BiWorld } from "react-icons/bi";
import type { Type } from "../../../Type";

type Country = Type & {
  isVisited: boolean;
};

interface LargestProps {
  countriesData: Country[];
  largestShow: boolean;
  handleShowLargest: (value: boolean) => void;
}

function Largest({
  countriesData,
  largestShow,
  handleShowLargest,
}: LargestProps) {
  const countries = [...countriesData];
  countries.sort((a, b) => b.area.area - a.area.area);
  return (
    <div className="w-full bg-white shadow-sm rounded-2xl p-2">
      {/* topBAr */}

      <div className="flex justify-between items-center col-span-1 pt-2 pb-6 ">
        <div className="flex gap-2 items-center">
          <span className="text-3xl">
            <BiWorld />
          </span>
          <p className="font-semibold">
            Top {largestShow ? "" : "5"} largest country{" "}
          </p>
        </div>

        <button
          onClick={() => handleShowLargest(!largestShow)}
          className="font-semibold text-green-500 underline cursor-pointer"
        >
          {largestShow ? "close" : "View All"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5 font-semibold mb-5">
        <div className="flex justify-between items-center">
          <h4>#</h4>
          <h3>Country</h3>
        </div>

        <div className="flex justify-between items-center">
          <h3>Area(km2)</h3>
          <h3>Population</h3>
        </div>
      </div>

      {countries
        .slice(0, largestShow ? countriesData.length : 5)
        .map((country, index) => (
          <div className="grid grid-cols-2 gap-4 mb-5 outline outline-gray-200 p-2 rounded-2xl">
            <div className="flex justify-between">
              <span>{index + 1}</span>
              <div className="flex justify-between w-40 items-center">
                <img
                  src={country.flags.flags.png}
                  className="w-10 h-7"
                  alt=""
                />
                <h2>{country.name.common}</h2>
              </div>
            </div>
            <div className="flex justify-between">
              <h3>{country.area.area}</h3>
              <h3>{country.population.population}</h3>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Largest;
