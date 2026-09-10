import type { Type } from "../../../Type";
import EditCountry from "./EditCountry";
import FlagsDetails from "./FlagsDetails";
type Country = Type & {
  isVisited: boolean;
};

interface VisitedControlProps {
  visitedData: Country[];
  editVisited: boolean;
  handleEditVisited: (value: boolean) => void;
  flagsShow : boolean
  handleFlagsShow: (value: boolean) => void;
  
}

function FlagsBox({
  visitedData,
  editVisited,
  handleEditVisited,
  flagsShow,
  handleFlagsShow
}: VisitedControlProps) {
  
  const handleIditUpdate = () => {
    handleFlagsShow(false)
    handleEditVisited(true)
  }

  const handleSaveFlags = () => {
    handleFlagsShow(true)
    handleEditVisited(false)
  }

  return (
    <div>


{/* flagsAll */}
      {flagsShow && (
        <div>
        <div>
          <h1 className="text-center text-green-500 text-2xl font-bold">
            You have already Visited
          </h1>
        </div>

        <div className="flex gap-2 flex-wrap mt-5">
          {visitedData.map((country) => (
            <FlagsDetails key={country.ccn3.ccn3} country={country} />
          ))}
        </div>
      </div>

      )}


{/* edit flags Dashboard */}
      {editVisited && <EditCountry visitedData = {visitedData}></EditCountry>}
      

{/* fishined flagsdashboard */}
      <div className="mt-10 flex justify-between">
        <h4 className="text-lg font-bold">
          Explored{" "}
          <span className="text-2xl text-green-700">{visitedData.length}</span>{" "}
          Countries
        </h4>

        { flagsShow && (
            <button
              onClick={handleIditUpdate}
              className="px-1 rounded-md underline underline-offset-2 text-lg hover:scale-105 transition-transform duration-300 cursor-pointer font-semibold"
        > Edit country</button>

          )}

          {editVisited && (
            <button
              onClick={handleSaveFlags}
              className="px-1 rounded-md underline underline-offset-2 text-lg hover:scale-105 transition-transform duration-300 cursor-pointer font-semibold"
              > Save </button>
          )}
        


      </div>
    </div>
  );
}

export default FlagsBox;
