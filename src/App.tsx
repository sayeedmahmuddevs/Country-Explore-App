import { useState } from "react"
import CountriesMain from "./component/Countries/Countries-main"
import HomeMain from "./component/home/Home-main"
import VisitedCountriesMain from "./component/Visited-Coutries/Visited-Countries-Main"
import Nav from "./component/Nav"

function App() {
  // navtype
  type NavClick = "home" | "countries" | "visited countries";

  // navChange click
  const [navClick, setNavClick] = useState<NavClick>("home")

  const handleNavClick = (nav: NavClick) => {
    setNavClick(nav)
  }

  return (
    <>
      <Nav setNavClick={handleNavClick} navClick={navClick}></Nav>
      {navClick === "home" && <HomeMain></HomeMain>}
      {navClick === "countries" && <CountriesMain></CountriesMain>}
      {navClick === "visited countries" && <VisitedCountriesMain></VisitedCountriesMain>}
    </>
  )
}

export default App
