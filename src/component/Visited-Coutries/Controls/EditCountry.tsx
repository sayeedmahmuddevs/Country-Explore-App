import { useState } from "react";
import type { Type } from "../../../Type";
import RemoveCountry from "./RemoveCountry";

type Country = Type & {
  isVisited: boolean;
};

interface EditCountryProps {
    visitedData : Country []
    allData : Country[]
    handleTrush : (code:number) => void
    handleTrushData : (country: Country) => void
}



function EditCountry( {visitedData, allData, handleTrush, handleTrushData} : EditCountryProps) {
    
    const [searchData, setSearchData] = useState("")

    const datas = visitedData.filter((country) => country.name.common.toUpperCase().startsWith(searchData.toUpperCase().trim()))

console.log(visitedData.length)

  return (
    <div className="p-4 rounded-3xl shadow-2xs">
      <h2 className="text-center mb-3 font-bold text-2xl text-blue-600">
        Edit Countries
      </h2>

      <div className="flex w-full items-center rounded-2xl bg-green-50 p-1 mb-3">
        <span className="px-3 text-xl text-gray-400">🔍</span>

        <input
            value={searchData}
            onChange={(e) =>setSearchData(e.target.value) }
          type="text"
          placeholder="Search for a country..."
          className="flex-1 bg-transparent px-2 py-1 text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="flex justify-between">
        <div>3 country visited</div>
        <span>pined</span>
      </div>
      <div className="overflow-scroll h-100">
            {datas.map((country) => (
        <RemoveCountry key = {country.ccn3.ccn3} handleTrush = {handleTrush} country = {country} handleTrushData = {handleTrushData}  />
    ))}
      </div>
    
      
      

    </div>
  );
}

export default EditCountry;
