import "./Navbar.css";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsDatabaseCheck } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsColumnsGap } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [dark, setDark] = useState(false)

  const themechange = () => {
    if (dark) {
      document.documentElement.style.setProperty("--mayo", "#ffffff");
      document.documentElement.style.setProperty("--tar", "#000000");
      document.documentElement.style.setProperty("--blackish", "#2e2e2e");
      document.documentElement.style.setProperty("--sea", "#d7f0fe");
      document.documentElement.style.setProperty("--sunset", "#ffd6d6");
      document.documentElement.style.setProperty("--lavender", "#e4e5ff");
      document.documentElement.style.setProperty("--pista", "#D8FDD9");
      document.documentElement.style.setProperty("--cream", "#FEF1D7");
      document.documentElement.style.setProperty("--place", "#8f8d90");
      document.documentElement.style.setProperty("--inputf", "#ffffff"); 
    }
    else {
      document.documentElement.style.setProperty("--mayo", "#2e2e2e");
      document.documentElement.style.setProperty("--tar", "#ffffff");
      document.documentElement.style.setProperty("--blackish", "#000000");
      document.documentElement.style.setProperty("--sea", "#c9ebfe");
      document.documentElement.style.setProperty("--sunset", "#ffcdcd");
      document.documentElement.style.setProperty("--lavender", "#d5d7ff");
      document.documentElement.style.setProperty("--pista", "#d4fdd5");
      document.documentElement.style.setProperty("--cream", "#feecc9");
      document.documentElement.style.setProperty("--place", "#8f8d90");
      document.documentElement.style.setProperty("--inputf", "#fafafa");     
    }
    setDark(!dark);
  }

  return (
    <div className="nav-grandparent">
      <div className="nav-up">
        <div className="nav-parent">
          <div className="logo">INVO</div>
        </div>

        <div className="nav-parent">
          <NavLink
            to={"/statistics"}
            className={({ isActive }) =>
              isActive ? "active_navbar" : "inactive_navbar"
            }
          >
            <div to="statistics" className="nav-child">
              <BsGraphUpArrow className="icon" />
              Statistics
            </div>
          </NavLink>

          <NavLink
            to={"/stocks"}
            className={({ isActive }) =>
              isActive ? "active_navbar" : "inactive_navbar"
            }
          >
            <div className="nav-child">
              <BsDatabaseCheck className="icon" />
              Stocks
            </div>
          </NavLink>

          <NavLink
            to={"/billing"}
            className={({ isActive }) =>
              isActive ? "active_navbar" : "inactive_navbar"
            }
          >
            <div className="nav-child">
              <FaMoneyBillAlt className="icon" />
              Billing
            </div>
          </NavLink>

          <NavLink
            to={"/column"}
            className={({ isActive }) =>
              isActive ? "active_navbar" : "inactive_navbar"
            }
          >
            <div className="nav-child">
              <BsColumnsGap className="icon" />
              Columns
            </div>
          </NavLink>

          <NavLink
            to={"/help"}
            className={({ isActive }) =>
              isActive ? "active_navbar" : "inactive_navbar"
            }
          >
            <div className="nav-child">
              <BiHelpCircle className="icon" />
              Help
            </div>
          </NavLink>
          <div className="nav-child-theme" onClick={themechange}>
            <MdOutlineDarkMode className="icon" />
            Dark Mode
          </div>
        </div>
      </div>

      <div className="nav-bottom">
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "active_navbar" : "inactive_navbar"
          }
        >
          <div className="nav-child">
            <MdContacts className="icon" />
            Contact
          </div>
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            isActive ? "active_navbar" : "inactive_navbar"
          }
        >
          <div className="nav-child nav-logout">
            <RiLogoutCircleRLine className="icon" />
            Logout
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
