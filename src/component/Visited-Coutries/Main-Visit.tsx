import { useState } from "react";
import type { Type } from "../../Type";
import AddCard from "./AddCard";



type Country = Type & {
  isVisited: boolean;
};

interface visitedCountriesMainTypeProps {
  visitedData: Country[];
  allData: Country[]
  handleTrush : (code: number) => void
  setVisited: React.Dispatch<React.SetStateAction<Country[]>>
}

function VisitedCountriesMain({ visitedData, allData, handleTrush, setVisited}: visitedCountriesMainTypeProps) {

  const [showAllVisited, setShowAllVisited] = useState(false)
  const handleShowAllVisited = (value: boolean):void => {
    setShowAllVisited(value)
  }

  
  
  return (
    <div className="container mx-auto max-w-300">
      
      <AddCard 
      visitedData={visitedData} 
      allData = {allData} handleTrush = {handleTrush} setVisited = {setVisited}
      showAllVisited = {showAllVisited} handleShowAllVisited = {handleShowAllVisited}
      
      ></AddCard>
      
      
    </div>
  );
}

export default VisitedCountriesMain;
