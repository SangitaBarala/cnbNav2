
import './App.css';
import Navbar from "./components/Navbar";
import Grids from "./GridSection/Grids";
import CnbTitle from "./components/CnbTitle";

function App() {
  return (
    <div>
      <Navbar/>
        <CnbTitle/>
        <Grids/>
    </div>
  );
}

export default App;
