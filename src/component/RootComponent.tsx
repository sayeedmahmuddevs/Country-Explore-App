import { use, useState } from "react";
import CountriesMain from "./Countries/Countries-main";
import HomeMain from "./home/Home-main";
import VisitedCountriesMain from "./Visited-Coutries/Visited-Countries-Main";
import Nav from "./Nav";
import type { Type } from "../Type";

interface RootComponentProps {
  data: Promise<Type[]>;

}

function RootComponent({ data }: RootComponentProps) {
  const datas = use(data);
  const [allCountry] = useState(datas.map((country) => ({...country, isVisited: false})));
    

  type NavClick = "home" | "countries" | "visited countries";

  const [navClick, setNavClick] = useState<NavClick>("home");

  const handleNavClick = (nav: NavClick) => {
    setNavClick(nav);
  };

  return (
    <>
      <Nav
        setNavClick={handleNavClick}
        navClick={navClick}
      />

      {navClick === "home" && <HomeMain allCountries={allCountry} />}

      {navClick === "countries" &&  <CountriesMain />}

      {navClick === "visited countries" &&  <VisitedCountriesMain />
      }
    </>
  );
}

export default RootComponent;
