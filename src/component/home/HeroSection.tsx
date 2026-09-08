export default function HeroSection() {
  return (
    <div>
      <section className="relative mt-5 overflow-hidden rounded-3xl bg-linear-to-r from-green-600 to-emerald-500 px-6 py-14 text-white shadow-lg">
        {/* Background decoration */}
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-white/10" />

        <div className="relative mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur-sm">
            🌎 Discover the world
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Explore the <span className="text-yellow-300">World</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-green-50 sm:text-base">
            Discover countries, explore their cultures, learn about people,
            places, languages and much more.
          </p>

          {/* Search Box */}
          <div className="mx-auto mt-8 flex max-w-2xl items-center rounded-2xl bg-white p-2 shadow-xl">
            <span className="px-3 text-xl text-gray-400">🔍</span>

            <input
              type="text"
              placeholder="Search for a country..."
              className="flex-1 bg-transparent px-2 py-3 text-sm
                   text-gray-700 outline-none
                   placeholder:text-gray-400"
            />

            <button
              type="button"
              className="rounded-xl bg-green-500 px-5 py-3
                   text-sm font-semibold text-white
                   transition hover:bg-green-600"
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
