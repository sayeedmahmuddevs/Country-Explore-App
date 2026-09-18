import type { Type } from "../../Type";
import { FaRegHeart } from "react-icons/fa6";

type Country = Type & {
  isVisited: boolean;
};

interface CountryProps {
  country: Country;
  fav : Country[]
  handleFav : (country : Country) => void

}

function Country({country, fav, handleFav}:CountryProps) {


  const favCol = fav.some((cnt) => cnt.ccn3.ccn3 === country.ccn3.ccn3)
  return (
    <div>
      <div className="p-1 outline outline-gray-300 rounded-2xl">
        <div className="w-full bg-amber-100 h-30 rounded-t-2xl overflow-hidden relative">

            <img className=" h-full w-full" src={country.flags.flags.png} alt="" />
            <button 
            onClick={() => handleFav(country)}
            className={`absolute top-1 right-3 text-3xl ${favCol? "text-red-500" : ""} `}><FaRegHeart/></button>
        </div>

        <div className="flex justify-between items-center bg-gray-800 text-white rounded-b-2xl px-2">
          <div className="size-10 bg-red-300 rounded-full flex justify-center items-center overflow-hidden">
            <img className="w-full h-full" src={country.flags.flags.png} alt="" />

          </div>
          <h2>{country.name.common}</h2>
          <h4>{country.continents.continents}</h4>
        </div>
      </div>
    </div>
  );
}

export default Country;
