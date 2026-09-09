import { useState } from "react";

import type { Type } from "../../Type";
import FilteringCountries from "./FilteringCountries";
import Countries from "./Countries";
interface CountriesMainProps {
  countries: Type[];
}

type continentsfilter =
  | "all"
  | "Asia"
  | "Europe"
  | "Africa"
  | "North America"
  | "South Americas"
  | "Oceania"
  | "Antarctica";

  
  export default function CountriesMain({ countries }: CountriesMainProps) {

  const [selectedFilter, setSelectedFilter] = useState<continentsfilter>("all");
  
  const continentsFilter = countries.filter((country) => {
    if (selectedFilter === "all") {
      return country
    }else{

      return country.continents.continents.includes(selectedFilter);
    }
  });

  return (
    <div>
      <FilteringCountries
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {continentsFilter.map((country, index) => (
            <Countries key={index} country={country} />
          ))}
        </div>
      </section>
    </div>
  );
}
