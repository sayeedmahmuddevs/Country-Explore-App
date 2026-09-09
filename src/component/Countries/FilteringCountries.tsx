

type continentsfilters = "all" | "Asia" | "Europe" | "Africa" | "North America" | "South Americas" | "Oceania" | "Antarctica";
type populationfilter = "all" | "under 1 million" | "under 10 million" | "under 100 million" | "more than 100 million";  

interface FilteringCountriesProps {
  
  continentFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<continentsfilters>>;
  populationFilter: string;
  setPopulationFilter: React.Dispatch<React.SetStateAction<populationfilter>>;
  peopleFilter: number;
}

export default function FilteringCountries({ continentFilter, setSelectedFilter, populationFilter, setPopulationFilter, peopleFilter }

  : FilteringCountriesProps) {

  return (
    <section className="mt-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      {/* Top Row */}
      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-800">Explore Countries</h2>

          <p className="text-sm text-gray-400">
            Discover countries from around the world
          </p>
        </div>

        <p className="text-sm text-gray-500">
          Showing <span className="font-bold text-green-500">{peopleFilter}</span>{" "}
          countries
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {/* Region */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-500">
            Region
          </label>

          <select
            value={continentFilter}
            onChange={(e) => setSelectedFilter(e.target.value as continentsfilters)}

            className="w-full rounded-xl border border-gray-200 bg-gray-50
                   px-3 py-2.5 text-sm text-gray-600 outline-none
                   transition focus:border-green-400 focus:ring-2
                   focus:ring-green-100"
          >
            <option value = "all">All Regions</option>
            <option value = "Africa">Africa</option>
            <option value = "Asia">Asia</option>
            <option value = "South America">South America</option>
            <option value = "North America">North America</option>
            <option value = "Europe">Europe</option>
            <option value = "Oceania">Oceania</option>
            <option value = "Antarctica">Antarctica</option>
          </select>
        </div>

        {/* Population */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-500">
            Population
          </label>

          <select
            value={populationFilter}
            onChange={(e) => setPopulationFilter(e.target.value as populationfilter)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50
                   px-3 py-2.5 text-sm text-gray-600 outline-none
                   transition focus:border-green-400 focus:ring-2
                   focus:ring-green-100"
          >
            <option value="all">Any Population</option>
            <option value="under 1 million">Under 1M</option>
            <option value="under 10 million">1M - 10M</option>
            <option value="under 100 million">10M - 100M</option>
            <option value="more than 100 million">100M+</option>
          </select>
        </div>

        {/* Language */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-500">
            Language
          </label>

          <select
            className="w-full rounded-xl border border-gray-200 bg-gray-50
                   px-3 py-2.5 text-sm text-gray-600 outline-none
                   transition focus:border-green-400 focus:ring-2
                   focus:ring-green-100"
          >
            <option>All Languages</option>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>Arabic</option>
            <option>Bengali</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-500">
            Sort By
          </label>

          <select
            className="w-full rounded-xl border border-gray-200 bg-gray-50
                   px-3 py-2.5 text-sm text-gray-600 outline-none
                   transition focus:border-green-400 focus:ring-2
                   focus:ring-green-100"
          >
            <option value="all">Any Sort</option>
            <option value ="A-Z">Name: A → Z</option>
            <option value = "Z-A">Name: Z → A</option>
            <option value = "high to low">Population: High → Low</option>
            <option value = "low to high">Population: Low → High</option>
          </select>
        </div>
      </div>

      {/* Active Filters */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-gray-400">
          Quick filters:
        </span>

        <button
          className="rounded-full bg-green-50 px-3 py-1.5 text-xs
                 font-medium text-green-600 transition hover:bg-green-100"
        >
          🌏 Asia
        </button>

        <button
          className="rounded-full bg-blue-50 px-3 py-1.5 text-xs
                 font-medium text-blue-600 transition hover:bg-blue-100"
        >
          👥 Large Population
        </button>

        <button
          className="rounded-full bg-gray-100 px-3 py-1.5 text-xs
                 font-medium text-gray-500 transition hover:bg-gray-200"
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
}
