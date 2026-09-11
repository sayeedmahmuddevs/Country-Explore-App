import HeroMain from "./HeroSection/HeroMain"
import type { Type } from "../../Type";

type Country = Type & {
  isVisited: boolean;
};

interface MainDashProps{
    countriesData: Country[];
    visitedData: Country[];

}
function MainDash({countriesData, visitedData}:MainDashProps) {
  return (
    <div className="container px-2 mx-auto">
      <HeroMain countriesData = {countriesData} visitedData = {visitedData} />
    </div>
  )
}

export default MainDash
