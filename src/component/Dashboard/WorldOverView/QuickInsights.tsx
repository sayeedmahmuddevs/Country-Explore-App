import type { Type } from "../../../Type";

type Country = Type & {
  isVisited: boolean;
};

interface QuickInsightsProps {
  countriesData: Country[];
}

export default function QuickInsights({
  countriesData,
}: QuickInsightsProps) {
  const allQuickSights = {
    "Official Languages": {
      value: [
        ...new Set(
          countriesData.flatMap((country) =>
            Object.values(country.languages?.languages ?? {})
          )
        ),
      ],
      icon: "💬",
      bg: "bg-blue-100",
    },

    Currencies: {
      value: [
        ...new Set(
          countriesData.flatMap((country) =>
            Object.values(country.currencies?.currencies ?? {}).map(courrency => courrency.name)
          )
        ),
      ],
      icon: "💰",
      bg: "bg-amber-100",
    },

    Timezones: {
      value: [
        ...new Set(
          countriesData.flatMap((country) => country.timezones ?? [])
        ),
      ],
      icon: "🕐",
      bg: "bg-emerald-100",
    },

    "Landlocked Countries": {
      value: countriesData.filter((country) => country.landlocked).length,
      icon: "📍",
      bg: "bg-rose-100",
    },

    "UN Member States": {
      value: countriesData.filter((country) => country.unMember).length,
      icon: "🌐",
      bg: "bg-blue-100",
    },

    "Island Countries": {
      value: "56",
      icon: "🌴",
      bg: "bg-cyan-100",
    },

    "Observer States": {
      value: "2",
      icon: "👥",
      bg: "bg-indigo-100",
    },

    "Capital (Most countries)": {
      value: "Various",
      icon: "🏢",
      bg: "bg-blue-100",
    },
  };

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
        {Object.entries(allQuickSights).map(
          ([label, { value, icon, bg }]) => (
            <div
              key={label}
              className="flex items-center gap-3 py-2.5"
            >
              {/* Icon */}
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm ${bg}`}
              >
                {icon}
              </div>

              {/* Label */}
              <div className="flex-1">
                <p className="text-xs text-slate-500">
                  {label}
                </p>
              </div>

              {/* Value */}
              <span className="text-xs font-bold text-slate-700">
                {Array.isArray(value) ? value.length : value}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
