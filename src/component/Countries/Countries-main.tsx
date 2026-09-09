import { useState } from "react";

import type { Type } from "../../Type";
import FilteringCountries from "./FilteringCountries";
import Countries from "./Countries";

// type declaration
interface CountriesMainProps {
  countries: Type[];
  searchCountry: string;
  setSearchCountry: (value: string) => void;
}

type continentsfilter = "all"  | "Asia"  | "Europe"  | "Africa"  | "North America"  | "South Americas"  | "Oceania"  | "Antarctica";
type populationfilter = "all" | "under 1 million" | "under 10 million" | "under 100 million" | "more than 100 million";  
type countrySort = "all" | "A-Z" | "Z-A" | "Low to High" | "High to Low" 

// main function
export default function CountriesMain({ countries, searchCountry, setSearchCountry }: CountriesMainProps) {


  // continentsfilter selection
  const [continentFilter, setSelectedFilter] = useState<continentsfilter>("all");
  const [populationFilter, setPopulationFilter] = useState<populationfilter>("all");
  
  // searchFilter
  const mainData = countries.filter((country) => {
    if (searchCountry === "") {
      return country;
    }
    return country.name.common.toLowerCase().startsWith(searchCountry.toLowerCase().trim());
  });

  // continent Selector
  const continentsFilter = mainData.filter((country) => {
    if (continentFilter === "all") {
      return country;
    } 
      return country.continents.continents.includes(continentFilter);
    // end continents selections
  })

  // population
  const peopleFilter = continentsFilter.filter((country) => {
    if(populationFilter === "all") {
      return true;
    }else if(populationFilter === "under 1 million" && country.population.population < 1000000) {
      return true;
    }else if(populationFilter === "under 10 million" 
      && country.population.population > 1000000 
      && country.population.population < 10000000) {
      return true;
    } else if(populationFilter === "under 100 million" &&
      country.population.population> 100000000 &&
      country.population.population < 1000000000) {
      return true;
    } else if(populationFilter === "more than 100 million" &&
      country.population.population > 1000000000) {
      return true;
    }
    
  });

  return (
    <div className = "container mx-auto px-40 py-6">
      <FilteringCountries
        continentFilter={continentFilter}
        setSelectedFilter={setSelectedFilter}
        setPopulationFilter={setPopulationFilter}
        populationFilter={populationFilter}
        peopleFilter={peopleFilter.length}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
      />
      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {peopleFilter.map((country, index) => (
            <Countries key={index} country={country} />
          ))}
        </div>
      </section>
    </div>
  );
}
