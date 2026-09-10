import type { Type } from "../../Type";
type Country = Type & {
  isVisited: boolean;
};
interface ExploreCountProps {
  data: Country[];
}

export default function ExploreCount({ data }: ExploreCountProps) {
  const continents = [
    ...new Set(data.flatMap((country) => country.continents.continents)),
  ];
  const populationTotal = data.reduce(
    (total, country) => total + country.population.population,
    0,
  );
  const populationInBillions = (populationTotal / 1_000_000_000).toFixed(1);
  console.log(populationTotal);

  return (
    <section className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4 container mx-auto px-4 sm:px-6 lg:px-20">
      {/* Total Countries */}
      <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
          🌍
        </div>

        <div>
          <p className="text-2xl font-bold text-gray-800">{data.length}</p>
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
          <p className="text-2xl font-bold text-gray-800">
            {continents.length}
          </p>
          <p className="text-sm text-gray-400">Continents</p>
        </div>
      </div>

      {/* Population */}
      <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-2xl">
          👥
        </div>

        <div>
          <p className="text-2xl font-bold text-gray-800">
            <span className="text-red-500">{populationInBillions}</span> Billion
          </p>
          <p className="text-sm text-gray-400">World Population</p>
        </div>
      </div>
    </section>
  );
}
