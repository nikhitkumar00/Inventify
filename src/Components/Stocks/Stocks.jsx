import React from "react";
import "./Stocks.css";

export const Stocks = () => {
  return (
    <div className="Stocks">
      <table className="StocksTable">
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
        <form action="" style={{width:"100%"}}>
          <table className="AddTable">
            <tr>
              <th>Sl.no</th>
              <th>Name</th>
              <th>Expiry Date</th>
              <th>MRP</th>
              <th>Quantity</th>
            </tr>
            <tr>
              <td>
                <input type="text" name="" id="" className="StocksInput"/>
              </td>
              <td>
                <input type="text" name="" id="" className="StocksInput"/>
              </td>
              <td>
                <input type="text" name="" id="" className="StocksInput"/>
              </td>
              <td>
                <input type="text" name="" id="" className="StocksInput" />
              </td>
              <td>
                <input type="text" name="" id="" className="StocksInput"/>
              </td>
            </tr>
          </table>

          <div className="StocksBottomTableWrapper">
            <input className="StocksAddButton"
              type="submit" value="Add"
              />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Stocks