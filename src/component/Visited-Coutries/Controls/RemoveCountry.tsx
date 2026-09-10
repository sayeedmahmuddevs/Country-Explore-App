import type { Type } from "../../../Type";

type Country = Type & {
  isVisited: boolean;
}

interface RemoveCountryType{
  country: Country
  handleTrush : (code : number) => void
  handleTrushData : (country: Country) => void
}


function RemoveCountry({country, handleTrush, handleTrushData}: RemoveCountryType) {
  const trushData = () => {
    handleTrushData(country)
    handleTrush(Number(country.ccn3.ccn3))
  }
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

          <button 
          onClick={trushData }
          >trush</button>
        </div>
      </div>
  )
}

export default RemoveCountry
