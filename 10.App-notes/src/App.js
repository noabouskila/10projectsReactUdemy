import {Routes , Route} from "react-router-dom"
import Sidebar from "./Components/Sidebar/Sidebar"
import ListNotes from "./Components/ListNotes/ListNotes";
import MainArea from "./Components/MainArea/MainArea";
import DisplayNote from "./Components/DisplayNote/DisplayNote";

function App() {
  return (
    <>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<ListNotes/>}/>
      <Route path="/edit" element={<MainArea/>}/>
      <Route path="/displaynote/:id" element={<DisplayNote/>}/>
    </Routes>
    </>
  );
}

export default App;
