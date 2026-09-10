import type { Type } from "../../../Type";

type Country = Type & {
  isVisited: boolean;
}

interface RemoveCountryType{
  country: Country
}


function RemoveCountry({country}: RemoveCountryType) {
  return (
    <div className="mx-20 my-5 bg-gray-100 px-2 rounded-xl py-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-30 items-center">
            <img
                src={country.flags.flags.png}
                alt={`${country.name.common} flag`}
                className="w-15 h-9 object-cover rounded-sm transition-transform duration-300 ease-out group-hover:scale-140 group-hover:z-10 "
              />

            <div>
              <h2 className="font-bold">{country.name.common}</h2>
              <span>{country.isVisited? "": "visited"}</span>
            </div>
          </div>

          <span>trush</span>
        </div>
      </div>
  )
}

export default RemoveCountry
