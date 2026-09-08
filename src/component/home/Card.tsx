import { FaRegHeart } from "react-icons/fa6";
import type { Type } from "../../Type"


interface CardProps{
    data: Type[]
}

function Card({ data }: CardProps) {
  return (
    
      <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-20 justify-between rounded-xl text-2xl transition ">
            <img src={data[0].flags.flags.png} alt="" 
            className="max-w-40 group-hover:scale-110 transition-transform duration-200 rounded-xl border-1"/>
            <span className ={"inline-block"}><FaRegHeart /></span>
          </div>

          <h3 className="font-bold text-gray-800">{data[0].name.common}</h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Discover capital, region, subregion, area, population and other
            essential information.
          </p>

          <button className="mt-4 text-sm font-semibold text-green-500 hover:text-green-600">
            Explore →
          </button>
        </div>
    
  )
}

export default Card
