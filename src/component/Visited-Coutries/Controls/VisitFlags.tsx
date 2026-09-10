import type { Type } from "../../../Type";
import Flags from "./Flags";
type Country = Type & {
  isVisited: boolean;
};

interface VisitedControlProps {
  visitedData: Country[];
}

function VisitControl({ visitedData }: VisitedControlProps) {
  return (
    <div>
      <div>
        <h1 className="text-center text-green-500 text-2xl font-bold">
          You have already Visited
        </h1>
      </div>

      <div className="flex gap-2 flex-wrap mt-5">
        {visitedData.map((country) => (
          <Flags country = {country}/>
        ))}
      </div>

      <div className="mt-10 flex justify-between">
        <h4 className="text-lg font-bold">Explored <span className="text-2xl text-green-700">{visitedData.length}</span> Countries</h4>
        <button className="px-1 rounded-md underline underline-offset-2 text-lg hover:scale-105 transition-transform duration-300 cursor-pointer font-semibold">Edit country</button>
      </div>
    </div>
  );
}

export default VisitControl;
