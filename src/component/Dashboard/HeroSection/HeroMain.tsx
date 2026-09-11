import HeroSectionDash from './HeroSectionDash'
import type { Type } from '../../../Type';
import HeroProgressBar from './HeroProgressbar';

type Country = Type & {
  isVisited: boolean;
};

interface HeroMainProps{
    countriesData: Country[];
    visitedData: Country[];

}
export default function HeroMain({countriesData, visitedData} : HeroMainProps) {
  return (
    <div className='grid grid-cols-12 px-5 mt-5 gap-2'>
      <HeroSectionDash/>
      <HeroProgressBar data = {countriesData} visited = {visitedData}/>
    </div>
  )
}
