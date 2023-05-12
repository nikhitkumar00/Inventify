import Navbar from "./Components/Navbar/Navbar";
import Statistics from "./Components/Statistics/Statistics";
import './App.css'
import { Stocks } from "./Components/Stocks/Stocks";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Stocks />
    </div>
  );
};

export default App;
