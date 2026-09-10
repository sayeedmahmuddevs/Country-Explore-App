import { use, useState } from "react";
import CountriesMain from "./Countries/Main-Countries";
import HomeMain from "./home/Main-Home";
import VisitedCountriesMain from "./Visited-Coutries/Main-Visit";
import Nav from "./Nav";
import type { Type } from "../Type";
import Footer from "./Footer/Footer";

interface RootComponentProps {
  data: Promise<Type[]>;
}

type Country = Type & {
  isVisited: boolean;
};

type NavClick = "home" | "countries" | "visited countries";

function RootComponent({ data }: RootComponentProps) {
  // fetching Data
  const datas = use(data);

  // data
  const [allCountry, setAllCountry] = useState<Country[]>(
    datas.map((country) => ({ ...country, isVisited: false })),
  );

  const handleVisited = (name: number) => {
    setAllCountry((prev) =>
      prev.map((country) =>
        Number(country.ccn3.ccn3) === name
          ? { ...country, isVisited: true }
          : country,
      ),
    );
  };

//  card will remove when allData will be update
const handleTrush = (code : number) => {
  setAllCountry((prev) =>
      prev.map((country) =>
        Number(country.ccn3.ccn3) === code
          ? { ...country, isVisited: false }
          : country,
      ),
    );
}

  const [searchCountry, setSearchCountry] = useState<string>("");
  

  // Nav Click

  const [navClick, setNavClick] = useState<NavClick>("home");
  const handleNavClick = (nav: NavClick) => {
    setNavClick(nav);
  };

  // Visited Country
  const [visited, setVisited] = useState<Country[]>([]);

  const handleArrayVisited = (country: Country) => {
    setVisited((pre) => {
      if (pre.some((cnt) => cnt.flags.flags.png === country.flags.flags.png)) {
        return pre;
      }
      return [...pre, country];
    });
  };


  const handleTrushedData = (country : Country ) => {
    setVisited( pre => pre.filter(pr => pr.ccn3.ccn3 !== country.ccn3.ccn3))
  };

  return (
    <section>
      <Nav setNavClick={handleNavClick} navClick={navClick} />

      {navClick === "home" && (
        <HomeMain
          allCountries={allCountry}
          setNavClick={setNavClick}
          navClick={navClick}
          setSearchCountry={setSearchCountry}
          searchCountry={searchCountry}
          handleVisited={handleVisited}
          handleArrayVisited={handleArrayVisited}
          visited = {visited}
        />
      )}

      {navClick === "countries" && (
        <CountriesMain
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
          countries={allCountry}
          handleVisited={handleVisited}
          handleArrayVisited={handleArrayVisited}
        />
      )}

      {navClick === "visited countries" && (
        <VisitedCountriesMain visitedData={visited} allData = {allCountry} handleTrush = {handleTrush} handleTrushData = {handleTrushedData}/>
      )}

      <Footer />
    </section>
  );
}

export default RootComponent;
