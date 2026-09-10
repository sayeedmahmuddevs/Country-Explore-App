import ExploreCount from "./ExploreCount";
import HeroSection from "./HeroSection";
import type { Type } from "../../Type";
import RenderCard from "./RenderCard";

type NavClick = "home" | "countries" | "visited countries";

type Country = Type & {
  isVisited: boolean;
};

interface HomeMainProps {
  allCountries: Country[];
  visited : Country[]
  setNavClick: (value: NavClick) => void;
  navClick: NavClick;
  searchCountry: string;
  setSearchCountry: (value: string) => void;
  handleVisited: (name: number) => void;
  handleArrayVisited: (country: Country) => void;
}

export default function HomeMain({
  allCountries,
  visited,
  setNavClick,
  navClick,
  searchCountry,
  setSearchCountry,
  handleVisited,
  handleArrayVisited,
}: HomeMainProps) {
  return (
    <div className="container mx-auto">
      <HeroSection
        data={allCountries}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        navClick={navClick}
        setNavClick={setNavClick}
        handleVisited={handleVisited}
        handleArrayVisited={handleArrayVisited}
      ></HeroSection>

      <ExploreCount data={allCountries} visited = {visited}></ExploreCount>

      <RenderCard
        data={allCountries}
        setNavClick={setNavClick}
        navClick={navClick}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        handleVisited={handleVisited}
        handleArrayVisited={handleArrayVisited}
      ></RenderCard>
    </div>
  );
}
