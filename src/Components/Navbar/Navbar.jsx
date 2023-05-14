import "./Navbar.css";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsDatabaseCheck } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsColumnsGap } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri"
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
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
