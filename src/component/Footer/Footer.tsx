const Footer = () => {
  return (
    <footer className="mt-16 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              World<span className="text-amber-400">Explorer</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Explore the world, discover new countries, and learn interesting
              facts about every corner of our planet.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Explore</h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  All Countries
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  Asia
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  Europe
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  Africa
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  Countries
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  Visited Countries
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-amber-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Stay Connected
            </h3>

            <p className="mb-4 text-sm text-slate-400">
              Get the latest updates about countries and travel.
            </p>

            <div className="flex overflow-hidden rounded-lg bg-white">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 px-4 py-2 text-sm text-slate-800 outline-none"
              />

              <button className="bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} WorldExplorer. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-amber-400">
              Facebook
            </a>
            <a href="#" className="transition hover:text-amber-400">
              Instagram
            </a>
            <a href="#" className="transition hover:text-amber-400">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;