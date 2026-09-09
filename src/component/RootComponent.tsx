import { use, useState } from "react";
import CountriesMain from "./Countries/Countries-main";
import HomeMain from "./home/Home-main";
import VisitedCountriesMain from "./Visited-Coutries/Visited-Countries-Main";
import Nav from "./Nav";
import type { Type } from "../Type";
import Footer from "./Footer/Footer";

interface RootComponentProps {
  data: Promise<Type[]>;

}

function RootComponent({ data }: RootComponentProps) {
  // fetching Data
  const datas = use(data);
  const [allCountry] = useState(datas.map((country) => ({...country, isVisited: false})));
    
// Nav Click
  type NavClick = "home" | "countries" | "visited countries";

  const [navClick, setNavClick] = useState<NavClick>("home");
  const handleNavClick = (nav: NavClick) => {
    setNavClick(nav);
  };

  // selectfilter
  

  return (
    <section>

      <Nav setNavClick={handleNavClick} navClick={navClick} />
      {navClick === "home" && <HomeMain allCountries={allCountry} setNavClick = {setNavClick} navClick = {navClick} />}
      {navClick === "countries" &&  <CountriesMain countries={allCountry}/>}
      {navClick === "visited countries" &&  <VisitedCountriesMain />
      }
      <Footer />

    </section>
  );
}

export default RootComponent;
