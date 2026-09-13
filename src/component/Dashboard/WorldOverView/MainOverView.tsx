import Continents from "./Continents"
import type { Type } from "../../../Type";
import WorldMap from "./WorldMap";
type Country = Type & {
  isVisited: boolean;
};

interface MainDashProps{
    countriesData: Country[];

}

function MainOverView({countriesData} : MainDashProps ) {
  return (
    <section className="container mx-auto px-5 grid lg:grid-cols-4 grid-cols-1  gap-5 mt-10">
      <Continents countriesData = {countriesData}/>
      <WorldMap countriesData = {countriesData}/>
    </section>
    
  )
}

export default MainOverView
