import type { Type } from "../../Type";
import AddCard from "./AddCard";

type Country = Type & {
  isVisited: boolean;
};

interface visitedCountriesMainTypeProps {
  visitedData: Country[];
  allData: Country[]
}

function VisitedCountriesMain({ visitedData, allData }: visitedCountriesMainTypeProps) {
  return (
    <div className="container mx-auto max-w-300">
      
      <AddCard visitedData={visitedData} allData = {allData}></AddCard>
    </div>
  );
}

export default VisitedCountriesMain;
