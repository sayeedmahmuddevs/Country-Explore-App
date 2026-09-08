export default function ExploreCount() {
  return (
    <div>
      <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {/* Total Countries */}
        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
            🌍
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-800">250</p>
            <p className="text-sm text-gray-400">Countries</p>
          </div>
        </div>

        {/* Visited */}
        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl">
            ✅
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-800">12</p>
            <p className="text-sm text-gray-400">Visited</p>
          </div>
        </div>

        {/* Continents */}
        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-2xl">
            🗺️
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-800">7</p>
            <p className="text-sm text-gray-400">Continents</p>
          </div>
        </div>

        {/* Population */}
        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-2xl">
            👥
          </div>

          <div>
            <p className="text-2xl font-bold text-gray-800">8.1B</p>
            <p className="text-sm text-gray-400">World Population</p>
          </div>
        </div>
      </section>
    </div>
  );
}
