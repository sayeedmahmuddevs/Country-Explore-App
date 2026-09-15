import worldMap from "../../../assets/continents.png";
import type { Type } from "../../../Type";
import { BiWorld } from "react-icons/bi";

type Country = Type & {
  isVisited: boolean;
};

interface WorldMapProps {
  countriesData: Country[];
}

function WorldMap({countriesData}:WorldMapProps) {
    const conts = [
        {cont: "Asia", bg: "bg-pink-700"},
        {cont: "Europe", bg: "bg-amber-700"},
        {cont: "Africa", bg: "bg-green-700"},
        {cont: "North America", bg: "bg-blue-800"},
        {cont: "South America", bg: "bg-blue-400"},
        {cont: "Oceania", bg: "bg-pink-700"},
        {cont: "Antarctica", bg: "bg-gray-700"}
    ]
    const continents = (continent: string): number => {
  return countriesData.filter((country) =>
    country.continents.continents.includes(continent)
  ).length;
};

    console.log(continents("Africa"))
  return (
    <section className="w-full rounded-2xl shadow-sm bg-white p-1">
      <div className="flex justify-between px-2">
        <div className="flex gap-2 items-center">
          <span>{<BiWorld/>}</span>
          <p className="font-bold">World Map</p>
        </div>
        <span className="text-blue-600 font-semibold">View All</span>
      </div>
      <div className="relative">
        <div className="h-100">
          <img className="h-full w-full" src={worldMap} alt="" />
        </div>
        <span className="absolute top-0 w-20 p-2 text-[10px] text-center outline-2 bg-blue-50 transform translate-y-30 text-blue-700  outline-blue-800 inline-block rounded-2xl">N. America {continents("North America")}</span>
        <span className="absolute bottom-20 left-20 w-20 text-[10px] p-2 text-center outline-2 bg-blue-50 transform  text-blue-400  outline-blue-400 inline-block rounded-2xl">S. America {continents("South America")}</span>
        <span className="absolute bottom-35 right-40 w-20 text-[10px] p-2 outline-2 text-center bg-green-50 transform  text-green-700  outline-green-800 inline-block rounded-2xl">Africa {continents("Africa")}</span>
        <span className="absolute right-10 bottom-50 w-20 text-[10px] p-2 outline-2 bg-yellow-50 text-center transform  text-yellow-700  outline-yellow-600 inline-block rounded-2xl">Oceania {continents("Oceania")}</span>
        <span className="absolute right-5 top-25 w-20 text-[10px] p-2 outline-2 bg-pink-50 transform text-center  text-pink-700  outline-pink-800 inline-block rounded-2xl">Asia {continents("Asia")}</span>
        <span className="absolute right-60 top-10 w-20 text-[10px] p-1 outline-2 bg-amber-50 transform text-center  text-amber-700  outline-amber-600 inline-block rounded-2xl">Europe {continents("Europe")}</span>
        <span className="absolute right-80 bottom-5 w-20 text-[10px] p-1 outline-2 bg-gray-50 transform text-center  text-gray-700  outline-gray-600 inline-block rounded-2xl">Antarctica {continents("Antarctica")}</span>
      </div>
      <div className="flex justify-between">
            {conts.map(cnt =>
        <div className="flex gap-[5px] items-center ">
        <span className={`size-2 ${cnt.bg} rounded-full inline-block`}></span>
        <p className="text-[8px] font-semibold">{cnt.cont}</p>
        <p className="text-[8px]">{continents(cnt.cont)}</p>
      </div>

      )}
      </div>
      
      
    </section>
  );
}

export default WorldMap;
