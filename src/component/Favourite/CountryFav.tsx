import type { Type } from "../../Type";

type Country = Type & {
  isVisited: boolean;
};

interface CountryProps {
  country: Country;

}

function Country({country}:CountryProps) {
  return (
    <div>
      <div className="p-1 outline outline-gray-300 rounded-2xl">
        <div className="w-full bg-amber-100 h-30 rounded-t-2xl overflow-hidden relative">

            <img className=" h-full w-full" src={country.flags.flags.png} alt="" />
            <button></button>
        </div>

        <div className="flex justify-between items-center bg-gray-800 text-white rounded-b-2xl px-2">
          <div className="size-10 bg-red-300 rounded-full flex justify-center items-center">flag</div>
          <h2>Bangladesh</h2>
          <h4>Asia</h4>
        </div>
      </div>
    </div>
  );
}

export default Country;
