type NavClick = "home" | "countries" | "visited countries";

interface NavProps {
  setNavClick: (value: NavClick) => void;
  navClick: NavClick;
}

function Nav({ setNavClick, navClick }: NavProps) {

    
  return (
    <div>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-310 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xl">
              🌍
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-800">
                Country <span className="text-green-500">Explorer</span>
              </h1>

              <p className="hidden text-[10px] text-gray-400 sm:block">
                Explore the world
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <a
              href="#"
              onClick={() => setNavClick("home")}
              className= {`rounded-lg  px-4 py-2 text-sm font-semibold hover:bg-gray-100 hover:text-green-600   ${navClick === "home"? "text-green-600 bg-green-50" : "" }`}
            >
              Home
            </a>

            <a
              href="#"
              onClick={() => setNavClick("countries")}
              className={`rounded-lg  px-4 py-2 text-sm font-semibold  hover:bg-gray-100 hover:text-green-600  ${navClick === "countries"? "text-green-600 bg-green-50" : "" }`}
            >
              Countries
            </a>

            <a
              href="#"
              onClick={() => setNavClick("visited countries")}
              className = {`rounded-lg  px-4 py-2 text-sm font-semibold  hover:bg-gray-100 hover:text-green-600  ${navClick === "visited countries"? "text-green-600 bg-green-50" : "" }`}
            >
              Visited Countries
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Favorite */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full
                   bg-gray-50 text-lg transition
                   hover:bg-red-50 hover:text-red-500"
            >
              ♡
            </button>

            {/* Theme */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full
                   bg-gray-50 text-lg transition
                   hover:bg-green-50"
            >
              ☀️
            </button>

            {/* Mobile Menu */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg
                   bg-gray-50 text-xl md:hidden"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
