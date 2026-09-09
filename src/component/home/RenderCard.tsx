import type { Type } from "../../Type";
import CountriesMain from "../Countries/Countries-main";
import Card from "./Card";
import { FaArrowRight } from "react-icons/fa6";

type NavClick = "home" | "countries" | "visited countries";

interface RenderCardProps {
  data: Type[];
  setNavClick: (value: NavClick) => void;
  navClick: NavClick;
  searchCountry: string;
  setSearchCountry: (value: string) => void;
}

function RenderCard({ data, setNavClick, navClick, searchCountry, setSearchCountry }: RenderCardProps) {
  return (
    <section className="mt-8 container mx-auto px-4 sm:px-10 lg:px-20">
      {/* Section Header */}
      <div className="mb-5">
        <div className="flex justify-between items-center">
          <h2 className="text-sm lg:text-xl font-bold uppercase tracking-wider text-black">
            Featured Countiries
          </h2>
          <button
            className="text-blue-600 font-semibold hover:translate-x-1 transition-transform duration-300"
            onClick={() => setNavClick("countries")}
          >
            View All <FaArrowRight className="inline-block ml-1" />
            {navClick === "countries" && (
              <CountriesMain countries={data} searchCountry={searchCountry} setSearchCountry={setSearchCountry} />
            )}
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.slice(0, 4).map((country, index) => (
          <Card key={index} data={country} />
        ))}
      </div>
    </section>
  );
}

export default RenderCard;
