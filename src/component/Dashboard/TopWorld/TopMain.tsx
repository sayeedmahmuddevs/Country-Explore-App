import Largest from "./Largest";
import type { Type } from "../../../Type";
import { useState } from "react";

type Country = Type & {
  isVisited: boolean;
};

interface TopMainProps {
  countriesData: Country[];
}

function TopMain({ countriesData }: TopMainProps) {
  const [largestShow, setLargestShow] = useState(false);

  const handleShowLargest = (value: boolean) => {
    setLargestShow(value);
  };

  return (
    <section>
      {/* mainBAr */}
      <div className="grid grid-cols-1 gap-4 bg-slate-50 p-4 xl:grid-cols-[1fr_1.3fr_1fr]">
        <Largest
          countriesData={countriesData}
          largestShow={largestShow}
          handleShowLargest={handleShowLargest}
        />
      </div>

      {/* mainBar end */}


      {/* Largest countries show/hide */}
      {largestShow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-scroll py-10 pr-10 ">
          <div className="w-200 overflow-y-scroll h-full p-10 bg-white rounded-2xl">
            <Largest
              countriesData={countriesData}
              largestShow={largestShow}
              handleShowLargest={handleShowLargest}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default TopMain;
