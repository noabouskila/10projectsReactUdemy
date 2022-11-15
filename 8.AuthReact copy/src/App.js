import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SignUpModal from "./Components/SignUpModal";
import SignInModal from "./Components/SignInModal";
import Private from "./Pages/Private/Private";
import PrivateHome from "./Pages/Private/PrivateHome/PrivateHome";

function App() {
  return (
    <>
      <SignUpModal/>
      <SignInModal/>
      <Navbar/>
      
      <Routes>
        {/* route publique : balise autofermante */}
        <Route path="/" element={<Home/>}/>

        {/* route privée balise Route dans une balise route englobante */}
        <Route path="/private" element={<Private/>}>
          <Route path="/private/private-home" element={<PrivateHome/>}/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
