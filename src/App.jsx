import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <ToastContainer
        theme="colored"
        newestOnTop={true}
        closeOnClick
        transition={Slide}
      />
    </div>
  );
};

export default App;
