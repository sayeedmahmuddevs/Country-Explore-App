import type { Type } from "../../../Type";

type Country = Type & {
  isVisited: boolean;
};

interface FlagsProps{
    country: Country;
}

function Flags({country}:FlagsProps) {
  return (
    <div
            key={country.ccn3.ccn3}
            className="relative group w-10 h-7 flex items-center justify-center"
          >
            <p
              className="absolute bottom-full left-1/2 -translate-x-1/2  translate-y-2 whitespace-nowrap rounded-md
              bg-black px-2 py-1 text-xs text-white opacity-0 scale-0 pointer-events-none transition-all
                duration-300 ease-out group-hover:mb-3  group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 z-20 "
            >
              {country.name.common}
            </p>
            {/* Flag */}
            <img
              src={country.flags.flags.png}
              alt={`${country.name.common} flag`}
              className="w-10 h-7 object-cover rounded-sm transition-transform duration-300 ease-out group-hover:scale-140 group-hover:z-10 "
            />
          </div>
  )
}

export default Flags
