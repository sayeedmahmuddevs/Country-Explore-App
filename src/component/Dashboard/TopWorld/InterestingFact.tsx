
import type { Type } from "../../../Type";

type Country = Type & {
  isVisited: boolean;
};

interface interestingFact {
  countriesData: Country[];
}

function InterestingFact({countriesData}: interestingFact) {
    const countries = [...countriesData]

    const smallestCountry = countries.reduce((smallest, country) =>
  country.area.area < smallest.area.area ? country : smallest
);

const largestCountry = countries.reduce((largest, country) =>
  country.area.area > largest.area.area ? country : largest
);

const mostPopulation = countries.reduce((most, country) => 
    country.population.population > most.population.population ? country : most
)

const leastPopulation = countries.reduce((least, country) => 
    country.population.population  < least.population.population ? country : least
)
    

  return (
    <div className="p-4 rounded-2xl bg-white outline outline-gray-200">
      <div className="flex gap-10 items-center pl-5 pb-5">
        <span>
            icon
        </span>

        <h4 className="font-semibold">Interesting Facts</h4>
      </div>

        <div className="px-4 p-1 rounded-2xl outline outline-gray-200">
            <div className="flex gap-10 items-center justify-between">
                <span className="size-10 rounded-full bg-gray-100 flex justify-center items-center">
                    icon
                </span>
                <h4>Smallest Country</h4>
                <span>
                    {smallestCountry.name.common } ({
                        smallestCountry.area.area
                    })


                </span>
            </div>
        </div>

        <div className="px-4 p-1 rounded-2xl outline outline-gray-200">
            <div className="flex gap-10 items-center justify-between">
                <span className="size-10 rounded-full bg-gray-100 flex justify-center items-center">
                    icon
                </span>
                <h4>Largest Country</h4>
                <span>{largestCountry.name.common} ({ largestCountry.area.area}) </span>
            </div>
        </div>

        <div className="px-4 p-1 rounded-2xl outline outline-gray-200">
            <div className="flex gap-10 items-center justify-between">
                <span className="size-10 rounded-full bg-gray-100 flex justify-center items-center">
                    icon
                </span>
                <h4>Most Population Country</h4>
                <span>{mostPopulation.name.common} ({(mostPopulation.population.population/1000000000).toFixed(2)}B) </span>
            </div>
        </div>

        <div className="px-4 p-1 rounded-2xl outline outline-gray-200">
            <div className="flex gap-10 items-center justify-between">
                <span className="size-10 rounded-full bg-gray-100 flex justify-center items-center">
                    icon
                </span>
                <h4>Least Population country</h4>
                <span>{leastPopulation.name.common}({leastPopulation.population.population}) </span>
            </div>
        </div>

        <div className="px-4 p-1 rounded-2xl outline outline-gray-200">
            <div className="flex gap-10 items-center justify-between">
                <span className="size-10 rounded-full bg-gray-100 flex justify-center items-center">
                    icon
                </span>
                <h4>Smallest Country</h4>
                <span>bang </span>
            </div>
        </div>

        <div className="px-4 p-1 rounded-2xl outline outline-gray-200">
            <div className="flex gap-10 items-center justify-between">
                <span className="size-10 rounded-full bg-gray-100 flex justify-center items-center">
                    icon
                </span>
                <h4>Smallest Country</h4>
                <span>bang </span>
            </div>
        </div>

    </div>
  )
}

export default InterestingFact
