import ExploreCount from "./ExploreCount";
import HeroSection from "./HeroSection";
import type { Type } from "../../Type";
import RenderCard from "./RenderCard";

type NavClick = "home" | "countries" | "visited countries";

interface HomeMainProps {
  allCountries: Type[];
  setNavClick: (value: NavClick) => void;
  navClick: NavClick;

}


export default function HomeMain({allCountries, setNavClick, navClick } : HomeMainProps){
console.log(allCountries.length)
  return (
    <div className="container">
      <HeroSection></HeroSection>
      <ExploreCount data = {allCountries}></ExploreCount>
      <RenderCard data ={allCountries} setNavClick = {setNavClick} navClick = {navClick} ></RenderCard>
      
    </div>
  )
}
