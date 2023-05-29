import "./Statistics.css";
import { useState, useEffect } from "react";

const Statistics = () => {
  const [restockData, setRestockData] = useState([]);
  const [expiryData, setExpiryData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1/I_N_V_O%20Backend/restock.php")
      .then((response) => response.json())
      .then((data) => setRestockData(data))
      .catch((error) => console.log(error));

    fetch("http://127.0.0.1/I_N_V_O%20Backend/expiry.php")
      .then((response) => response.json())
      .then((data) => setExpiryData(data))
      .catch((error) => console.log(error));
  }, []);

  const restockTable = () => {
    return restockData.map((restock, index) => (
      <tr key={index}>
        {Object.values(restock).map((values, index) => (
          <td key={index} className="td_statistics">
            {values}
          </td>
        ))}
      </tr>
    ));
  };

  const expiryTable = () => {
    return expiryData.map((expiry, index) => (
      <tr key={index}>
        {Object.values(expiry).map((values, index) => (
          <td key={index} className="td_statistics">
            {values}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="container_statistics">
      <div className="header_statistics">Statistics</div>
      <div className="content_statistics">
        <div className="single-datas_statistics">
          <div className="data-child_statistics green_statistics">
            <div className="info_statistics">Total Profit</div>
            <div className="info-data_statistics">22k</div>
          </div>
          <div className="data-child_statistics blue_statistics">
            <div className="info_statistics">Total Expense</div>
            <div className="info-data_statistics">1232</div>
          </div>
          <div className="data-child_statistics yellow_statistics">
            <div className="info_statistics">Total Orders</div>
            <div className="info-data_statistics">252</div>
          </div>
          <div className="data-child_statistics purple_statistics">
            <div className="info_statistics">Growth This Month</div>
            <div className="info-data_statistics">15 %</div>
          </div>
        </div>
        <div className="tables_statistics">
          <div className="flex_statistics1">
            <div className="head_statistics">Expiry</div>
            <table className="purple_statistics bottom_statistics1">
              <thead>
                <tr>
                  <th className="th_statistics">SL No.</th>
                  <th className="th_statistics">Name</th>
                  <th className="th_statistics">Expiry Date</th>
                </tr>
              </thead>
              <tbody>{expiryTable() }</tbody>
            </table>
          </div>
          <div className="flex_statistics2">
            <div className="head_statistics">Restock Items</div>
            <table className="red_statistics bottom_statistics2">
              <thead>
                <tr>
                  <th className="th_statistics">SL No.</th>
                  <th className="th_statistics">Name</th>
                </tr>
              </thead>
              <tbody>{restockTable()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
