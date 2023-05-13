import "./Column.css";
import React from "react";

const Column = () => {
  return (
    <div className="wrapper_Column">
      <h2>COLUMNS</h2>
      <div className="header_Column">
        <div className="minus_Column">
          <div className="minus1_Column">-</div>
          <div className="minus2_Column">-</div>
          <div className="minus3_Column">-</div>
          <div className="minus4_Column">-</div>
          <div className="minus5_Column">-</div>
        </div>
        <div className="container_Column">
          <table className="title_Column">
            <tr className="title_Column">
              <td className="title_child_Column">SL.NO</td>
              <td className="title_child_Column">NAME</td>
              <td className="title_child_Column">EXPIRY</td>
              <td className="title_child_Column">MRP</td>
              <td className="title_child_Column">QTY</td>
            </tr>
          </table>
          <div className="plus_Column">+</div>
        </div>
      </div>
      <table className="table_Column">
        <tr className="odd_Column">
          <td className="odd_child_Column">
            <input className="input_Column" type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
        </tr>
        <tr className="even_Column">
          <td className="even_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="even_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="even_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="even_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="even_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
        </tr>
        <tr className="odd_Column">
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column" type="text"></input>
          </td>
        </tr>
        <tr className="even_Column">
          <td className="even_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="even_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="even_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="even_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="even_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
        </tr>
        <tr className="odd_Column">
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
          <td className="odd_child_Column">
            <input className="input_Column"  type="text"></input>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Columns;
