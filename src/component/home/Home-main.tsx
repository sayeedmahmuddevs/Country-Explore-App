import ExploreCount from "./ExploreCount";
import HeroSection from "./HeroSection";
import type { Type } from "../../Type";
import RenderCard from "./RenderCard";

type NavClick = "home" | "countries" | "visited countries";

interface HomeMainProps {
  allCountries: Type[];
  setNavClick: (value: NavClick) => void;
  navClick: NavClick;
  searchCountry: string;
  setSearchCountry: (value: string) => void;

}


export default function HomeMain({allCountries, setNavClick, navClick, searchCountry, setSearchCountry } : HomeMainProps){
console.log(allCountries.length)
  return (
    <div className="container">
      <HeroSection 
      data = {allCountries}
      searchCountry = {searchCountry} 
      setSearchCountry = {setSearchCountry}
      navClick = {navClick}
      setNavClick={setNavClick}
      ></HeroSection>
      <ExploreCount data = {allCountries}></ExploreCount>
      
      <RenderCard data ={allCountries} 
      setNavClick = {setNavClick} 
      navClick = {navClick} 
      searchCountry = {searchCountry} 
      setSearchCountry = {setSearchCountry} ></RenderCard>
      
    </div>
  )
}
