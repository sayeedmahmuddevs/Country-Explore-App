
import Largest from './Largest'
import type { Type } from '../../../Type';

type Country = Type & {
  isVisited: boolean;
};

interface TopMainProps{
    countriesData: Country[];

}

function TopMain({countriesData}:TopMainProps) {
  return (
    <section className="grid grid-cols-1 gap-4 bg-slate-50 p-4 xl:grid-cols-[1fr_1.3fr_1fr]">
      <Largest countriesData = {countriesData}/>
    </section>
  )
}

export default TopMain
