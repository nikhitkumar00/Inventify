import React from "react";
import "./Navbar.css";
import { toast } from "react-toastify";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsDatabaseCheck } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsColumnsGap } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { MdContacts } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-grandparent">
      <div className="nav-up">
        <div className="nav-parent">
          <div className="logo">INVO</div>
        </div>

        <div className="nav-parent">
          <div to="statistics" className="nav-child">
            <BsGraphUpArrow className="icon" />
            Statistics
          </div>
          <div className="nav-child">
            <BsDatabaseCheck className="icon" />
            Stocks
          </div>
          <div className="nav-child">
            <FaMoneyBillAlt className="icon" />
            Billing
          </div>
          <div className="nav-child">
            <BsColumnsGap className="icon" />
            Columns
          </div>
          <div className="nav-child">
            <BiHelpCircle className="icon" />
            Help
          </div>
        </div>
      </div>
      <div className="nav-child">
        <MdContacts className="icon" />
        Contact
      </div>
    </div>
  );
};

export default Navbar;