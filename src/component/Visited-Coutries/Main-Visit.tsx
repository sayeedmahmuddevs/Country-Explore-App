import { useState } from "react";
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
  const [showAllVisited, setShowAllVisited] = useState(false)
  const handleShowAllVisited = (value: boolean):void => {
    setShowAllVisited(value)
  }
  
  return (
    <div className="container mx-auto max-w-300">
      
      <AddCard visitedData={visitedData} allData = {allData} showAllVisited = {showAllVisited} handleShowAllVisited = {handleShowAllVisited} ></AddCard>
      
    </div>
  );
}

export default VisitedCountriesMain;
