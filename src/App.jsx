import './App.css'
import Billing from './Components/Billing/Billing';
import Navbar from "./Components/Navbar/Navbar";
import Statistics from './Components/Statistics/Statistics';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Billing />
    </div>
  );
};

export default App;
