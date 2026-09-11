import { useState } from "react";
import type { Type } from "../../../Type";
import RemoveCountry from "./RemoveCountry";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

type SortType = "all" | "A-Z" | "Z-A";

type Country = Type & {
  isVisited: boolean;
};

interface EditCountryProps {
  visitedData: Country[];
  handleTrush: (code: number) => void;
  setVisited: React.Dispatch<React.SetStateAction<Country[]>>
}

function EditCountry({
  visitedData,
  handleTrush,
  setVisited,
}: EditCountryProps) {
  const [searchData, setSearchData] = useState("");
  const [trushSort, setTrushSort] = useState<SortType>("all");

  
  
  //   trush data search
  const sortCountries = (country: Country[]) => {
    const data = [...country]

    const filterData =data.filter((country) =>
      country.name.common
        .toUpperCase()
        .startsWith(searchData.toUpperCase().trim()),
    );

    //   sorted trush data
    if (trushSort === "all") {
      true;
    } else if (trushSort === "A-Z") {
      return filterData.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (trushSort === "Z-A") {
      return filterData.sort((a, b) => b.name.common.localeCompare(a.name.common));
    }

    return filterData
  };
// trush pined  data 
  const [pinedData, setPinedData] = useState<Country[]>([]);
  const handlePined = (country: Country) => {

    setPinedData((prev) => {
      if (prev.some((cnt) => cnt.ccn3.ccn3 === country.ccn3.ccn3)) {
        return prev.filter((cnt) => cnt.ccn3.ccn3 !== country.ccn3.ccn3);
      }
      if (pinedData.length === 3) {
        return prev;
      }
      return [...prev, country];
    });
  };

const handleTrushedData = (country : Country ) => {
  if(pinedData.some(cnt => cnt.ccn3.ccn3 === country.ccn3.ccn3)) return;
  setVisited( pre => pre.filter(pr => pr.ccn3.ccn3 !== country.ccn3.ccn3))
  }

  const [pined, setPined] = useState<boolean>(false);

// called sorted data
  const visitedCountries = sortCountries(visitedData)
  const visitePinedData = sortCountries(pinedData)


  return (
    <div className="p-4 rounded-3xl shadow-2xs">
      <h2 className="text-center mb-3 font-bold text-2xl text-blue-600">
        Edit Countries
      </h2>

      <div className="flex w-full items-center rounded-2xl bg-green-50 p-1 mb-3">
        <span className="px-3 text-xl text-gray-400">🔍</span>

        <input
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          type="text"
          placeholder="Search for a country..."
          className="flex-1 bg-transparent px-2 py-1 text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      {/* trush data sorted */}
      <div className="flex justify-between mx-20">
        <div>
          <select
            value={trushSort}
            onChange={(e) => setTrushSort(e.target.value as SortType)}
          >
            <option value="all">Sort</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
        <button
          onClick={() => setPined(!pined)}
          className={`text-lg ${pined ? "text-black" : "text-red-500"} flex justify-between items-center underline underline-offset-1`}
        >
          {pined ? (
            <>
              <FaArrowLeft /><span> Pined</span>
            </>
          ) : (
            <>
              <span>Pin </span>
              <FaArrowRight />
            </>
          )}
        </button>
      </div>
      <div className="overflow-scroll h-100">
        {!pined &&
          visitedCountries.map((country) => (
            <RemoveCountry
              key={country.ccn3.ccn3}
              handleTrush={handleTrush}
              country={country}
              handleTrushData={handleTrushedData}
              pinedData={pinedData}
              handlePined={handlePined}
            />
          ))}
        { pined && pinedData.length === 0 ? <div className="flex justify-center items-center h-full text-xl text-gray-600">
          <p>No pined Available</p>
        </div>  : ""}
        {pined &&  visitePinedData.map((country) => (
            <RemoveCountry
              key={country.ccn3.ccn3}
              handleTrush={handleTrush}
              country={country}
              handleTrushData={handleTrushedData}
              pinedData={pinedData}
              handlePined={handlePined}
            />
          ))}
      </div>
    </div>
  );
}

export default EditCountry;
