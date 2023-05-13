import React from "react";
import "./Navbar.css";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsDatabaseCheck } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsColumnsGap } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? 'black' : 'white',
      color: isActive ? 'white' : 'black'
    }
  }
  return (
    <div className="nav-grandparent">
      <div className="nav-up">
        <div className="nav-parent">
          <div className="logo">INVO</div>
        </div>

        <div className="nav-parent">
          <NavLink to={'/statistics'} style={navLinkStyles}>
            <div to="statistics" className="nav-child" >
              <BsGraphUpArrow className="icon" />
              Statistics

            </div>
          </NavLink>
          <NavLink to={'/stocks'}>
            <div className="nav-child">
              <BsDatabaseCheck className="icon" />
              Stocks

            </div></NavLink><NavLink to={'/billing'}>
            <div className="nav-child">
              <FaMoneyBillAlt className="icon" />
              Billing

            </div></NavLink>
          <div className="nav-child">
            <BsColumnsGap className="icon" />
            Columns
          </div><NavLink to={'/help'}>
            <div className="nav-child">
              <BiHelpCircle className="icon" />
              Help

            </div></NavLink>
        </div>
      </div>
      <NavLink to={'/contact'}>
        <div className="nav-child">
          <MdContacts className="icon" />
          Contact
        </div></NavLink>
    </div>
  );
};

export default Navbar;