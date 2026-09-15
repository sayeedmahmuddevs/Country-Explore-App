import Continents from "./Continents"
import type { Type } from "../../../Type";
import WorldMap from "./WorldMap";
import QuickInsights from "./QuickInsights";
type Country = Type & {
  isVisited: boolean;
};

interface MainDashProps{
    countriesData: Country[];

}



function MainOverView({countriesData} : MainDashProps ) {
  // const ar = [
  //   ind:{
  //     Bang:"bengle", 
  //     ind: "india"}
  //   ,
  //   {Bang:"af", ind: "pk"},
  //   {Bang:"arabi", ind: "irn"},
  //   {Bang:"but", ind: "npl"},
  // ]

  // const lg = ar.flatMap(fl => Object.keys(fl))
  // console.log(lg)


  return (
    <section className="grid grid-cols-1 gap-4 bg-slate-50 p-4 xl:grid-cols-[1fr_1.3fr_1fr]">
      <Continents countriesData = {countriesData}/>
      <WorldMap countriesData = {countriesData}/>
      <QuickInsights countriesData = {countriesData}/>
    </section>
    
  )
}

export default MainOverView
