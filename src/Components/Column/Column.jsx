import "./Column.css";
import React from "react";

const Columns = () => {
  return (
    <div className="wrapper_Column">
      <h2>COLUMNS</h2>
      <div className="header_Column">
        <div className="minus_Column">
          <div className="minus1">-</div>
          <div className="minus2">-</div>
          <div className="minus3">-</div>
          <div className="minus4">-</div>
          <div className="minus5">-</div>
        </div>
        <div className="container_Column">
          <table className="title_Column">
            <tr className="title">
              <td>SL.NO</td>
              <td>NAME</td>
              <td>EXPIRY</td>
              <td>MRP</td>
              <td>QTY</td>
            </tr>
          </table>
          <div className="plus">+</div>
        </div>
      </div>
      <table className="table_Column">
        <tr className="odd">
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
        </tr>
        <tr className="even">
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
        </tr>
        <tr className="odd">
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
        </tr>
        <tr className="even">
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
        </tr>
        <tr className="odd">
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
          <td>
            <input type="text"></input>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Columns;
