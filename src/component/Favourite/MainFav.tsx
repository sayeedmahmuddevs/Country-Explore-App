import type { Type } from "../../Type";
import { FaHeart } from "react-icons/fa";
import CountryFav from "./CountryFav";

type Country = Type & {
  isVisited: boolean;
};

interface MainFavProps {
  fav: Country[];
  handleFav : (country : Country) => void
  

}

function MainFav({ fav, handleFav }: MainFavProps) {
  return (
    <div className="fixed top-15 right-4 sm:right-6 md:right-10 z-50 w-[calc(100%-2rem)] max-w-[600px] bg-white outline outline-gray-400 rounded-xl p-2">
      <div className="w-full flex gap-5">
        <button className="text-2xl sm:text-3xl md:text-4xl text-red-500">
          <FaHeart />
        </button>

      <div>
        <h2>My Fvorites</h2>        
      </div>
      </div>

      <div className="h-100 overflow-y-scroll p-2 grid grid-cols-2 gap-3">
        {
          fav.map((cnt) => <CountryFav key={cnt.ccn3.ccn3} country ={cnt} fav = {fav} handleFav = {handleFav}/>)
        }
      

      </div>
    </div>
  );
}

export default MainFav;
