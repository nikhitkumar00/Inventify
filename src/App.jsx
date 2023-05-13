import "./App.css";
import Navbar from "./Components/Navbar/Navbar"
import Statistics from "./Components/Statistics/Statistics";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default App;
