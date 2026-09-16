import HeroMain from "./HeroSection/HeroMain"
import type { Type } from "../../Type";
import MainOverView from "./WorldOverView/MainOverView";
import TopMain from "./TopWorld/TopMain";

type Country = Type & {
  isVisited: boolean;
};

interface MainDashProps{
    countriesData: Country[];
    visitedData: Country[];

}
function MainDash({countriesData, visitedData}:MainDashProps) {
  return (
    <div className="container px-2 mx-auto bg-blue-50">
      <HeroMain countriesData = {countriesData} visitedData = {visitedData} />
      <MainOverView countriesData = {countriesData}/>
      <TopMain countriesData = {countriesData}/>
    </div>
  )
}

export default MainDash
