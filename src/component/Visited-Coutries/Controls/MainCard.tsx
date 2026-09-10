import type { Type } from "../../../Type";
import FlagsBox from "./FlagsBox";
import { useState } from "react";

type Country = Type & {
  isVisited: boolean;
};

interface showVisitedProps{
    visitedData: Country[];
    handleShowAllVisited: (value: boolean) => void
    allData : Country[]
    handleTrush : (code: number) => void
    handleTrushData : (country: Country) => void
    
}

export default function MainCard ({handleShowAllVisited, visitedData, allData, handleTrush, handleTrushData} : showVisitedProps) {

  const [editVisited, setEditVisited] = useState(false)
  const handlEditVisited = (value:boolean) => {
      setEditVisited(value)
  }

  const [flagsShow, setFlagsShow] = useState(true)
  const handlFlagsShow = (value:boolean) => {
      setFlagsShow(value)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-300 max-w-300 rounded-2xl bg-white p-6 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={()=> handleShowAllVisited(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-red-100 hover:text-red-500"
            >
              ✕
            </button>

            {/* Content */}
            <div className="w-full">
            
                <FlagsBox
                editVisited = {editVisited} handleEditVisited={handlEditVisited} 
                visitedData = {visitedData} allData = {allData} handleTrush = {handleTrush} handleTrushData = {handleTrushData}
                flagsShow = {flagsShow} handleFlagsShow = {handlFlagsShow}
                ></FlagsBox>
            </div>
          </div>
        </div>
  )
}
