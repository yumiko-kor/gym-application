import { useState } from "react";

import Navbar from "@/scenes/navbar";

enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OusClasees = "ourclasees",
  CntextUs = "contextus"
}


function App() {
  const [ selectedPage, setSelectedPage ] = useState<string>(SelectedPage.Home);


  return (
    <Navbar 
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  )
}

export default App
