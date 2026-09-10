import type { Type } from "../../Type";

type Country = Type & {
  isVisited: boolean;
};

interface AddCardTypeProps {
  visitedData: Country[];
  allData: Country[];
}

export default function AddCard({ visitedData, allData }: AddCardTypeProps) {
  
  const Percent = Number((100 * visitedData.length) / allData.length);

  return (
    <section className="mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-green-500">
            Your Journey
          </p>

          <h2 className="mt-1 text-2xl font-bold text-gray-800">
            Visited Countries 🌎
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Keep exploring and discover more of the world.
          </p>
        </div>

        {/* Progress Circle / Percentage */}
        <div className="flex items-center gap-4">
          {/* <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-green-100">
            <span className="text-xl font-extrabold text-green-500">{Percent.toFixed()}%</span>
          </div> */}

          <div
            className="flex h-20 w-20 items-center justify-center rounded-full"
            style={{
              background: `conic-gradient(from -90deg, #22c55e ${Percent}%, #dcfce7 0)`,
            }}
          >
            <div className="flex items-center justify-center rounded-full">
              <span className="text-xl font-extrabold text-pink-500">
                {Percent.toFixed()}%
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-400">World explored</p>

            <p className="text-lg font-bold text-gray-800">
              {" "}
              <span>{visitedData.length}</span> / <span>{allData.length}</span>
            </p>

            <p className="text-xs text-gray-400">Countries visited</p>
          </div>
        </div>
      </div>

      {/* Progress Information */}
      <div className="mt-7">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-gray-600">
            Exploration Progress
          </span>

          <span className="font-bold text-green-500">
            <span>{visitedData.length}</span> of{" "}
            <span>{allData.length} countries</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-4 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-linear-to-r from-green-400 to-emerald-500"
            style={{ width: `${Percent}%` }}
          />
        </div>

        {/* Bottom Stats */}

        <div className="max-w-full flex flex-wrap items-center gap-5 my-4 mt-7 ">
          <h4 className="mr-2 font-bold">Visited Country : </h4>
          {visitedData.slice(0, 12).map((country) => (
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
          ))}
          {visitedData.length > 12 && (
            <button className="relative border border-gray-200 w-10 h-7 shadow-lg opacity-70 font-bold hover:scale-110 transition-transform duration-200 rounded-sm">
              <img
                src={visitedData[12].flags.flags.png}
                className="w-full h-full object-cover rounded-sm transition-transform duration-300 ease-out group-hover:scale-140 group-hover:z-10 opacity-20"
              />
              <span className="absolute top-0 right-3">
                +{visitedData.length - 12}
              </span>

            </button>
          )}
        </div>
      </div>
    </section>
  );
}
