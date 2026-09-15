import { use, useState } from "react";
import CountriesMain from "./Countries/Main-Countries";
import HomeMain from "./home/Main-Home";
import VisitedCountriesMain from "./Visited-Coutries/Main-Visit";
import Nav from "./Nav";
import type { Type } from "../Type";
import Footer from "./Footer/Footer";
import MainDash from "./Dashboard/MainDash";

interface RootComponentProps {
  data: Promise<Type[]>;
}

type Country = Type & {
  isVisited: boolean;
};

type NavClick = "home" | "countries" | "visited countries" | "dashboard";

function RootComponent({ data }: RootComponentProps) {
  // fetching Data
  const datas = use(data);

  
  const [visited, setVisited] = useState<Country[]>(() => {
  const saved = localStorage.getItem("Card");

  return saved ? JSON.parse(saved) : [];
});


  const handleVisited = (country: Country) => {
    setVisited((pre) => {
      if (pre.some((cnt) => cnt.ccn3.ccn3 === country.ccn3.ccn3)) {
        return pre;
      }
      const newCountry: Country = {
        ...country, isVisited : true
      }
      localStorage.setItem("Card", JSON.stringify([...pre, newCountry]))
      return [...pre, newCountry];
    });
  };

//  card will remove when allData will be update
const handleTrush = (code : number) => {
  setVisited((prev) =>{
      const update = prev.filter((country) =>
        Number(country.ccn3.ccn3) !== code
      );
      localStorage.setItem("Card", JSON.stringify(update))
      return update
});
}

 const allCountry : Country[] = datas.map((country) => ({ ...country, 
    isVisited: visited.some((item )=> Number(item.ccn3.ccn3) === Number(country.ccn3.ccn3)) }));

  const [searchCountry, setSearchCountry] = useState<string>("");
  

  // Nav Click

  const [navClick, setNavClick] = useState<NavClick>("home");
  const handleNavClick = (nav: NavClick) => {
    setNavClick(nav);
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
          visited = {visited}
        />
      )}

      {navClick === "countries" && (
        <CountriesMain
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
          countries={allCountry}
          handleVisited={handleVisited}
        />
      )}

      {navClick === "visited countries" && (
        <VisitedCountriesMain visitedData={visited} allData = {allCountry} handleTrush = {handleTrush} setVisited = {setVisited}/>
      )}

      {navClick === "dashboard" && (
        <MainDash visitedData={visited} countriesData = {allCountry} />
      )}

      <Footer />
    </section>
  );
}

export default RootComponent;
