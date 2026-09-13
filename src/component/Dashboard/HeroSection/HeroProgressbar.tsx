import type { Type } from "../../../Type";

import { TiWorld } from "react-icons/ti";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";


type Country = Type & {
  isVisited: boolean;
};
interface ExploreCountProps {
  data: Country[];
  visited: Country[];
}

export default function HeroProgressBar({ data, visited }: ExploreCountProps) {
  const continents = [
    ...new Set(data.flatMap((country) => country.continents.continents)),
  ];
  
  const populationTotal = data.reduce(
    (total, country) => total + country.population.population,
    0,
  );
  const populationInBillions = (populationTotal / 1_000_000_000).toFixed(1);
  console.log(populationTotal);


  return (
    <section className="container mx-auto outline outline-gray-300 rounded-2xl p-2 bg-white">
      <div>
        <div className="flex justify-between items-center pt-2 pb-6">
          <div className="flex gap-2 items-center">
            <span className="text-3xl">🌍</span>
            <p className="font-semibold">World at a glance</p>
          </div>

          <div><span className="font-semibold text-green-600">{data.length}</span> Countries</div>
        </div>
        <div className="grid grid-cols-4 gap-2">

          {/* countries */}
          <div className="bg-blue-50 rounded-xl pb-10 pt-5 px-2">
            <div className="ml-5 rounded-full p-1 bg-blue-100 size-13 flex justify-center items-center text-9xl text-blue-500"><TiWorld></TiWorld></div>
            <h5 className="font-bold flex justify-between text-md"><p>Countries </p> <span>-</span><span className="font-bold block">{data.length}</span></h5>
            <h5 className="font-semibold flex justify-between text-sm my-2"><p>UN</p> <span>-</span><span className="block">
              {data.filter(country => country.unMember).length}
              </span></h5>
            <h5 className="font-semibold flex justify-between text-sm"><p>Non-UN</p> <span>-</span><span className=" block">
              {data.filter(country => !country.unMember).length}
              </span></h5>
          </div>
          
          {/* contienents */}
          <div className="bg-green-50 rounded-xl pb-5 pt-5 px-2">
            <div className="ml-5 rounded-full p-1 bg-green-100 size-13 flex justify-center items-center text-9xl text-green-500"><IoPeopleCircleOutline/></div>
            <h5 className="font-bold flex justify-between text-md">Continents</h5>
            <h5 className="font-semibold flex justify-between text-3xl ml-5">{continents.length}</h5>
            <h5 className="font-semibold flex gap-1 text-sm">{continents.slice(0,2).map(c => <span>{c},</span>)}...</h5>
          </div>

          {/* visited */}
          <div className="bg-purple-50 rounded-xl pb-5 pt-5 px-2">
            <div className="ml-5 rounded-full p-1 bg-purple-100 size-13 flex justify-center items-center text-9xl text-purple-500"><IoPeople/></div>
            <h5 className="font-bold flex justify-between text-md">Visited</h5>
            <h5 className="font-semibold flex justify-between text-3xl ml-5">{visited.length}</h5>
            <h5 className="font-semibold flex text-sm">
              {((visited.length*100)/data.length).toFixed(1)} %

            </h5>
          </div>

          {/* population */}
          <div className="bg-amber-50 rounded-xl pb-5 pt-5 px-2">
            <div className="ml-5 rounded-full p-1 bg-amber-100 size-13 flex justify-center items-center text-9xl text-amber-500"><IoIosPeople/></div>
            <h5 className="font-bold flex justify-between text-sm">World Population</h5>
            <h5 className="font-semibold flex justify-between text-3xl ml-5">{populationInBillions}B</h5>
            <h5 className="font-semibold flex justify-between text-sm">People on Earth</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
