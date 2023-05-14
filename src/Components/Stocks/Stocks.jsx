import React, { useState, useEffect } from 'react';
import "./Stocks.css";

export const Stocks = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1/I_N_V_O%20Backend/retrieve.php')
      .then(response => response.json())
      .then(data => setStockData(data))
      .catch(error => console.log(error));
  }, []);

  const getTableHeaders = () => {
    if (stockData.length > 0) {
      return Object.keys(stockData[0]).map((key, index) => (
        <th key={index} className="th_STOCKS">{key}</th>
      ));
    }
    return null;
  };

  const getTableRows = () => {
    return stockData.map((stock, index) => (
      <tr key={index}>
        {Object.values(stock).map((value, index) => (
          <td key={index} className=".td_STOCKS">{value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="Stocks">
      <table className="StocksTable">
        <thead>
          <tr>
            {getTableHeaders()}
          </tr>
        </thead>
        <tbody>
          {getTableRows()}
        </tbody>
      </table>
      <div>
        <form action="" style={{ width: "100%" }}>
          <table className="AddTable">
            <thead>
              <tr>
                {getTableHeaders()}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=".td_STOCKS">
                  <input type="text" name="" id="" className="StocksInput" />
                </td>
                <td className=".td_STOCKS">
                  <input type="text" name="" id="" className="StocksInput" />
                </td>
                <td className=".td_STOCKS">
                  <input type="text" name="" id="" className="StocksInput" />
                </td>
                <td className=".td_STOCKS">
                  <input type="text" name="" id="" className="StocksInput" />
                </td>
                <td className=".td_STOCKS">
                  <input type="text" name="" id="" className="StocksInput" />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="StocksBottomTableWrapper">
            <input className="StocksAddButton" type="submit" value="Add" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Stocks;
