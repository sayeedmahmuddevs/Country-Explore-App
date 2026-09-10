import type { Type } from "../../../Type";
import VisitControl from "./VisitControl";

type Country = Type & {
  isVisited: boolean;
};

interface showVisitedProps{
    visitedData: Country[];
    handleShowAllVisited: (value: boolean) => void
}

export default function MainCard ({handleShowAllVisited} : showVisitedProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="relative w-200 max-w-200 rounded-2xl bg-white p-6 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={()=> handleShowAllVisited(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-red-100 hover:text-red-500"
            >
              ✕
            </button>

            {/* Content */}
            <div className="w-full p-4">
            
                <VisitControl></VisitControl>
            </div>
          </div>
        </div>
  )
}
