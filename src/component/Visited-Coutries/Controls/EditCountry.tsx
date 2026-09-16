import { useState } from "react";
import type { Type } from "../../../Type";
import RemoveCountry from "./RemoveCountry";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

type SortType = "all" | "A-Z" | "Z-A";

type Country = Type & {
  isVisited: boolean;
};

interface EditCountryProps {
  visitedData: Country[];
  setVisited: React.Dispatch<React.SetStateAction<Country[]>>;
}

function EditCountry({
  visitedData,
  setVisited,
}: EditCountryProps) {
  const [searchData, setSearchData] = useState("");
  const [trushSort, setTrushSort] = useState<SortType>("all");

  // Pin state
  const [pinedData, setPinedData] = useState<Country[]>(
  ()=>{
    const saved = localStorage.getItem("PinCard")

    return saved? JSON.parse(saved) : []
  }
  );

  // Pin / Unpin
  const handlePined = (country: Country) => {
    setPinedData((prev) => {
      const isPinned = prev.some(
        (cnt) => cnt.ccn3.ccn3 === country.ccn3.ccn3
      );

      // Already pinned → Unpin
      if (isPinned) {
        return prev.filter(
          (cnt) => cnt.ccn3.ccn3 !== country.ccn3.ccn3
        );
      }

      // Maximum 3 pin
      if (prev.length >= 3) {
        return prev;
      }
      localStorage.setItem('PinCard' , JSON.stringify([...prev, country]))
      return [...prev, country];
    });
  };

  // Delete country
  const handleTrushedData = (country: Country) => {
    const isPinned = pinedData.some(
      (cnt) => cnt.ccn3.ccn3 === country.ccn3.ccn3
    );

    // Pinned is not delete
    if (isPinned) {
      return;
    }

    setVisited((prev) => {
      const updated = prev.filter(
        (item) => item.ccn3.ccn3 !== country.ccn3.ccn3
      );

      localStorage.setItem(
        "Card",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  // Search + Sort
  const sortCountries = (countries: Country[]) => {
    const filteredData = countries.filter((country) =>
      country.name.common
        .toUpperCase()
        .startsWith(searchData.toUpperCase().trim())
    );

    if (trushSort === "A-Z") {
      return [...filteredData].sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
    }

    if (trushSort === "Z-A") {
      return [...filteredData].sort((a, b) =>
        b.name.common.localeCompare(a.name.common)
      );
    }

    return filteredData;
  };

  const visitedCountries = sortCountries(visitedData);
  const visitePinedData = sortCountries(pinedData);

  // Pin page / normal page
  const [pined, setPined] = useState(false);

  return (
    <div className="p-4 rounded-3xl shadow-2xs">
      <h2 className="text-center mb-3 font-bold text-2xl text-blue-600">
        Edit Countries
      </h2>

      {/* Search */}
      <div className="flex w-full items-center rounded-2xl bg-green-50 p-1 mb-3">
        <span className="px-3 text-xl text-gray-400">
          🔍
        </span>

        <input
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          type="text"
          placeholder="Search for a country..."
          className="flex-1 bg-transparent px-2 py-1 text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Sort + Pin */}
      <div className="flex justify-between mx-20">
        <select
          value={trushSort}
          onChange={(e) =>
            setTrushSort(e.target.value as SortType)
          }
        >
          <option value="all">Sort</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>

        <button
          onClick={() => setPined((prev) => !prev)}
          className={`text-lg ${
            pined ? "text-black" : "text-red-500"
          } flex items-center gap-1 underline`}
        >
          {pined ? (
            <>
              <FaArrowLeft />
              <span>Pined</span>
            </>
          ) : (
            <>
              <span>Pin</span>
              <FaArrowRight />
            </>
          )}
        </button>
      </div>

      {/* Countries */}
      <div className="overflow-y-auto h-100">
        {/* Normal visited countries */}
        {!pined && visitedCountries.length === 0 && (
          <div className="flex justify-center items-center h-full text-xl text-gray-600">
            <p>No Country Available</p>
          </div>
        )}

        {!pined &&
          visitedCountries.map((country) => (
            <RemoveCountry
              key={country.ccn3.ccn3}
              country={country}
              handleTrushData={handleTrushedData}
              pinedData={pinedData}
              handlePined={handlePined}
            />
          ))}

        {/* Pinned countries */}
        {pined && visitePinedData.length === 0 && (
          <div className="flex justify-center items-center h-full text-xl text-gray-600">
            <p>No Pined Available</p>
          </div>
        )}

        {pined &&
          visitePinedData.map((country) => (
            <RemoveCountry
              key={country.ccn3.ccn3}
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
