import type { Type } from "../../Type";

function Countries({ country }: { country: Type }) {
  const buttonUi: { [key: string]: string } = {
    Asia: "bg-pink-100 text-pink-500",
    Europe: "bg-blue-100 text-blue-500",
    Africa: "bg-green-100 text-green-500",
    "North America": "bg-yellow-100 text-yellow-500",
    "South America": "bg-red-100 text-red-500",
    Oceania: "bg-purple-100 text-purple-500",
    Antarctica: "bg-cyan-100 text-cyan-500",
  };
  return (
    <div className="group rounded-2xl flex-col justify-between border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div>
        <div className="mb-4 flex h-20 justify-between rounded-xl text-2xl transition ">
          <img
            src={country.flags.flags.png}
            alt=""
            className="max-w-40 group-hover:scale-110 transition-transform duration-200 rounded-xl border"
          />
        </div>

        <h3 className="font-bold text-gray-800 text-xl mb-1">
          {country.name.common}
        </h3>
        <h6 className="text-sm font-semibold text-gray-400 mb-3">
          {country.capital.capital}
        </h6>
        <span className={`p-1 rounded-xl font-mono text-sm ${buttonUi[country.continents.continents[0]]} `}>
          {country.continents.continents}
          </span>
      </div>

      <button className=" block w-full py-2 rounded-lg mt-4 text-sm font-semibold text-blue-500 border hover:text-blue-600">
        Visit
      </button>
    </div>
  );
}

export default Countries;
