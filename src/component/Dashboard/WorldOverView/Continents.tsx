import type { Type } from "../../../Type";

import { BiWorld } from "react-icons/bi";
import Asia from "../../../assets/Asia.png";
import Africa from "../../../assets/africa.png";
import Europe from "../../../assets/eurup.png";
import North from "../../../assets/north america.png";
import South from "../../../assets/south america.png";
import Antarctica from "../../../assets/antartica.png";
import Oceania from "../../../assets/oceania.png";

type Country = Type & {
  isVisited: boolean;
};

interface MainDashProps {
  countriesData: Country[];
}

function Continents({ countriesData }: MainDashProps) {
  // continents color & icon
  const buttonUi: {
    [key: string]: { color: string; bg: string; Name: string };
  } = {
    Asia: { color: "bg-pink-100 text-pink-500", bg: "bg-pink-500", Name: Asia },
    Europe: {
      color: "bg-blue-100 text-blue-500",
      bg: "bg-blue-500",
      Name: Europe,
    },
    Africa: {
      color: "bg-green-100 text-green-500",
      bg: "bg-green-500",
      Name: Africa,
    },
    "North America": {
      color: "bg-yellow-100 text-yellow-500",
      bg: "bg-yellow-500",
      Name: North,
    },
    "South America": {
      color: "bg-red-100 text-red-500",
      bg: "bg-red-500",
      Name: South,
    },
    Oceania: {
      color: "bg-purple-100 text-purple-500",
      bg: "bg-purple-500",
      Name: Oceania,
    },
    Antarctica: {
      color: "bg-cyan-100 text-cyan-500",
      bg: "bg-cyan-500",
      Name: Antarctica,
    },
  };

  // unic continents
   const Allcontinents = [
    ...new Set(
      countriesData.flatMap((country) => country.continents.continents),
    ),
  ];
  console.log(Allcontinents)

  const continentsNum = (value: string): number => {
    const num = countriesData.filter((country) =>
      country.continents.continents.includes(value),
    ).length;
    return num;
  };

  const numberOfCountries = (continentNums: string) => {
    return (
      (continentsNum(continentNums) / countriesData.length) *
      100
    ).toFixed(1);
  };
  return (
    <div className="bg-white rounded-2xl p-1">
      <div className="flex justify-between items-center col-span-1 pt-2 pb-6 ">
        <div className="flex gap-2 items-center">
          <span className="text-3xl">
            <BiWorld />
          </span>
          <p className="font-semibold">Countries by Continents</p>
        </div>

        <div>
          <span className="font-semibold text-green-600">
            {countriesData.length}
          </span>{" "}
          Countries
        </div>
      </div>

      {Allcontinents.map((continents) => (
        <div className="grid grid-cols-2 gap-3 outline outline-gray-100 rounded-xl p-2 mb-2">
          <div className="flex w-40 items-center justify-between">
            <div className="flex gap-2 items-center">
              <div
                className={`w-9 h-9 rounded-full flex justify-center items-c enter p-[4px] ${buttonUi[continents].color}`}
              >
                <img
                  className="object-fill"
                  src={buttonUi[continents].Name}
                  alt=""
                />
              </div>
              <div className="font-semibold text-[12px] ">{continents}</div>
            </div>

            <div className="font-semibold text-sm ">{continentsNum(continents)}</div>
          </div>

          <div className="flex justify-center gap-2 items-center">
            <p className="text-gray-500">{numberOfCountries(continents)}%</p>
            <div className="w-full h-3 rounded-2xl bg-blue-100">
              <span
                className={`block w-[10%] h-full rounded-2xl ${buttonUi[continents].bg}`}
                style={{ width: `${numberOfCountries(continents)}%` }}
              ></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Continents;
