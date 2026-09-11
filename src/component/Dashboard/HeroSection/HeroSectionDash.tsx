
export default function HeroSectionDash() {
  return (
    <section className=" col-span-7">
      <div className="relative overflow-hidden px-10 py-5 rounded-3xl bg-linear-to-r from-blue-400 to-emerald-500  text-white shadow-lg">
        {/* Background decoration */}
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-white/10" />

        <div className="relative  max-w-3xl">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur-sm">
            🌎 Discover the world
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-5xl">
            Explore the <span className="text-yellow-300">World</span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-green-50 sm:text-base">
            Discover countries, explore their cultures, learn about people,
            places, languages and much more.
          </p>

          
          
        </div>
        <button className="mb-4 rounded-full bg-green-400 px-4 py-2 text-md backdrop-blur-sm font-semibold cursor-pointer mt-3" >Starting Exploring</button>
      </div>
    </section>
  );
}
