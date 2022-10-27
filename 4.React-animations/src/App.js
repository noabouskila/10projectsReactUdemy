import {Routes , Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import Liste from "./Pages/Liste/Liste";
import Scroll from "./Pages/Scroll/Scroll";
import StateAnim from "./Pages/StateAnim/StateAnim";


// importer Routes et Route de react rooter dom : pour importer les differents composants selon le path 

function App() {
  return (
    <div className="global-container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Liste/>} />
        <Route path="/stateanim" element={<StateAnim/>} />
        <Route path="/scroll" element={<Scroll/>} />
      </Routes>
    </div>
  );
}

export default App;
