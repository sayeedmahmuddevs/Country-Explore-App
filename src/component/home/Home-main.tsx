import ExploreCount from "./ExploreCount";
import HeroSection from "./HeroSection";
import type { Type } from "../../Type";

interface HomeMainProps {
  allCountries: Type[];
}


export default function HomeMain({allCountries} : HomeMainProps){
console.log(allCountries.length)
  return (
    <div className="container">
      <HeroSection></HeroSection>
      <ExploreCount data = {allCountries}></ExploreCount>
    </div>
  )
}
