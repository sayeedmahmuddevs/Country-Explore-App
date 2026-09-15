import type{ Type } from "../../../Type";

type Country = Type & {
      isVisited: boolean;
    };
    
    interface QuickInsightsProps{
        countriesData: Country[];
    
    }

export default function QuickInsights({countriesData}: QuickInsightsProps) {
    
    
    const allQuickSights =  {
        "Official Language": [
                ...new Set(countriesData.flatMap(country => Object.values(country.languages.languages)))
            ],
            Currencies : [
                ...new Set(countriesData.flatMap(country => Object.values(country.currencies.currencies)))
            ],
            Timezones : [
                ...new Set(countriesData.flatMap(country => country.timezones))
            ],
            "Landlock Countries" : [
                ...new Set(countriesData.flatMap(country => country.landlocked))
            ],
            "UN Member Status" : countriesData.filter(coutntry => coutntry.unMember),
            "Islan Countries" : "b",
            "Obzerber Status" : "b"

            



    }

    // const island = countriesData.filter(country => !country.landlocked && country.borders.length )
    // console.log(island)
  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-lg">
          💡
        </div>

        <h2 className="text-sm font-bold text-slate-800 sm:text-base">
          Quick Insights
        </h2>
      </div>

      {/* Insights */}
      <div className="divide-y divide-slate-100">

        {/* Capital */}
        <div className="flex items-center gap-3 py-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm">
            🏢
          </div>

          <div className="flex-1">
            <p className="text-xs text-slate-500">
              Capital (Most countries)
            </p>
          </div>

          <span className="text-xs font-bold text-slate-700">
            Various
          </span>
        </div>

        {/* Languages */}
        <div className="flex items-center gap-3 py-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm">
            💬
          </div>

          <div className="flex-1">
            <p className="text-xs text-slate-500">
              Official Languages
            </p>
          </div>

          <span className="text-xs font-bold text-slate-700">
            ~7,000+
          </span>
        </div>

        {/* Currency */}
        <div className="flex items-center gap-3 py-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm">
            $
          </div>

          <div className="flex-1">
            <p className="text-xs text-slate-500">
              Currencies
            </p>
          </div>

          <span className="text-xs font-bold text-slate-700">
            ~180+
          </span>
        </div>

        {/* Timezones */}
        <div className="flex items-center gap-3 py-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm">
            🕐
          </div>

          <div className="flex-1">
            <p className="text-xs text-slate-500">
              Timezones
            </p>
          </div>

          <span className="text-xs font-bold text-slate-700">
            24
          </span>
        </div>

        {/* Landlocked */}
        <div className="flex items-center gap-3 py-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm">
            📍
          </div>

          <div className="flex-1">
            <p className="text-xs text-slate-500">
              Landlocked Countries
            </p>
          </div>

          <span className="text-xs font-bold text-slate-700">
            44
          </span>
        </div>

        {/* Islands */}
        <div className="flex items-center gap-3 py-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm">
            🌴
          </div>

          <div className="flex-1">
            <p className="text-xs text-slate-500">
              Island Countries
            </p>
          </div>

          <span className="text-xs font-bold text-slate-700">
            56
          </span>
        </div>

        {/* UN */}
        <div className="flex items-center gap-3 py-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm">
            🌐
          </div>

          <div className="flex-1">
            <p className="text-xs text-slate-500">
              UN Member States
            </p>
          </div>

          <span className="text-xs font-bold text-slate-700">
            193
          </span>
        </div>

        {/* Observer */}
        <div className="flex items-center gap-3 pt-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm">
            👥
          </div>

          <div className="flex-1">
            <p className="text-xs text-slate-500">
              Observer States
            </p>
          </div>

          <span className="text-xs font-bold text-slate-700">
            2
          </span>
        </div>

      </div>
    </div>
  )
}