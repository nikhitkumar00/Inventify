import React from "react";
import "./Stocks.css";

export const Stocks = () => {
  return (
    <div className="Stocks">
      <table>
        <tr>
          <th>Sl.no</th>
          <th>Name</th>
          <th>Expiry Date</th>
          <th>MRP</th>
          <th>Quantity</th>
        </tr>
        <tr>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
        </tr>
        <tr>
          <td>Sl.no</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
          <td>data</td>
        </tr>
      </table>
      <div>
        <form action="">
          <table>
            <tr>
              <th>Sl.no</th>
              <th>Name</th>
              <th>Expiry Date</th>
              <th>MRP</th>
              <th>Quantity</th>
            </tr>
            <tr>
              <td>
                <input type="text" name="" id="" />
              </td>
              <td>
                <input type="text" name="" id="" />
              </td>
              <td>
                <input type="text" name="" id="" />
              </td>
              <td>
                <input type="text" name="" id="" />
              </td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
          </table>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "row-reverse",
              marginRight: "10px",
            }}
          >
            <input
              type="submit"
              style={{
                fontFamily: "comfortaa",
                fontSize: "20px",
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingTop: "15px",
                paddingBottom: "15px",
                borderRadius: "30px",
              }}
              value="Add"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
