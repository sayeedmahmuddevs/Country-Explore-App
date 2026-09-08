

export default function FilteringCountries() {
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
          Showing <span className="font-bold text-green-500">195</span>{" "}
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
            className="w-full rounded-xl border border-gray-200 bg-gray-50
                   px-3 py-2.5 text-sm text-gray-600 outline-none
                   transition focus:border-green-400 focus:ring-2
                   focus:ring-green-100"
          >
            <option>All Regions</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>

        {/* Population */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-500">
            Population
          </label>

          <select
            className="w-full rounded-xl border border-gray-200 bg-gray-50
                   px-3 py-2.5 text-sm text-gray-600 outline-none
                   transition focus:border-green-400 focus:ring-2
                   focus:ring-green-100"
          >
            <option>Any Population</option>
            <option>Under 1M</option>
            <option>1M - 10M</option>
            <option>10M - 100M</option>
            <option>100M+</option>
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
            <option>Name: A → Z</option>
            <option>Name: Z → A</option>
            <option>Population: High → Low</option>
            <option>Population: Low → High</option>
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
