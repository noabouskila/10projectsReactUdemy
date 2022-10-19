import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/LangContext"

function App() {
  return (
    // provider  fournit au niveau de l'app pour que le context soit accessible dans tous les composants à l'interieur de App
    <ContextProvider>
      <ToggleLangs/>
      <Contenu/>
    </ContextProvider>
  );
}

export default App;
