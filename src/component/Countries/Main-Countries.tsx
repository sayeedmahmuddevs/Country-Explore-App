import { useState } from "react";

import type { Type } from "../../Type";
import FilteringCountries from "./FilteringCountries";
import Countries from "./Country";

type Country = Type & {
  isVisited: boolean;
};

// type declaration
interface CountriesMainProps {
  countries: Country[];
  searchCountry: string;
  setSearchCountry: (value: string) => void;
  handleVisited: (name: number) => void;
  handleArrayVisited: (country: Country) => void;
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
type populationfilter =
  | "all"
  | "under 1 million"
  | "under 10 million"
  | "under 100 million"
  | "more than 100 million";
type countrySort = "all" | "A-Z" | "Z-A" | "Low to High" | "High to Low";

// main function
export default function CountriesMain({
  countries,
  searchCountry,
  setSearchCountry,
  handleVisited,
  handleArrayVisited,
}: CountriesMainProps) {
  // continentsfilter selection
  const [continentFilter, setSelectedFilter] =
    useState<continentsfilter>("all");
  const [populationFilter, setPopulationFilter] =
    useState<populationfilter>("all");
  const [sorted, setSorted] = useState<countrySort>("all");

  // searchFilter
  const mainData = countries.filter((country) => {
    if (searchCountry === "") {
      return country;
    }
    return country.name.common
      .toLowerCase()
      .startsWith(searchCountry.toLowerCase().trim());
  });

  // continent Selector
  const continentsFilter = mainData.filter((country) => {
    if (continentFilter === "all") {
      return country;
    }
    return country.continents.continents.includes(continentFilter);
    // end continents selections
  });

  // population
  const peopleFilter = continentsFilter.filter((country) => {
    if (populationFilter === "all") {
      return true;
    } else if (
      populationFilter === "under 1 million" &&
      country.population.population < 1000000
    ) {
      return true;
    } else if (
      populationFilter === "under 10 million" &&
      country.population.population >= 1000000 &&
      country.population.population < 10000000
    ) {
      return true;
    } else if (
      populationFilter === "under 100 million" &&
      country.population.population >= 10000000 &&
      country.population.population < 100000000
    ) {
      return true;
    } else if (
      populationFilter === "more than 100 million" &&
      country.population.population >= 100000000
    ) {
      return true;
    }
  });

  // sorted
  if (sorted === "all") {
    true;
  } else if (sorted === "A-Z") {
    peopleFilter.sort((a, b) => a.name.common.localeCompare(b.name.common));
  } else if (sorted === "Z-A") {
    peopleFilter.sort((a, b) => b.name.common.localeCompare(a.name.common));
  } else if (sorted === "Low to High") {
    peopleFilter.sort(
      (a, b) => a.population.population - b.population.population,
    );
  } else if (sorted === "High to Low") {
    peopleFilter.sort(
      (a, b) => b.population.population - a.population.population,
    );
  }

  return (
    <div className="container mx-auto max-w-340">
      <FilteringCountries
        continentFilter={continentFilter}
        setSelectedFilter={setSelectedFilter}
        setPopulationFilter={setPopulationFilter}
        populationFilter={populationFilter}
        peopleFilter={peopleFilter.length}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        sorted={sorted}
        setSorted={setSorted}
      />
      <section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {peopleFilter.map((country, index) => (
            <Countries
              key={index}
              country={country}
              handleVisited={handleVisited}
              handleArrayVisited={handleArrayVisited}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
