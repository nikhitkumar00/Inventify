import "./App.css";
import Navbar from "./Components/Navbar/Navbar"
import Statistics from "./Components/Statistics/Statistics";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <ToastContainer theme="colored" newestOnTop={true} closeOnClick transition={Slide} />
    </div>
  );
};

export default App;
