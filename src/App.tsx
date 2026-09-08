import { Suspense, useState } from "react"
import type { Type } from "./Type"
import RootComponent from "./component/RootComponent";



function App() {

  const data = async() : Promise<Type[]> => {
    const res = await fetch('Data.json')
    const data = await res.json();
    return data.countries
  }

  const [datas] = useState(()=> data())
  
    

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}> 
      <RootComponent data = {datas} ></RootComponent>
    </Suspense>
      
    </>
  )
}

export default App
