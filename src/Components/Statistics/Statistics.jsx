import "./Statistics.css";
import { useState, useEffect } from "react";

const Statistics = () => {
  const [restockData, setRestockData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1/I_N_V_O%20Backend/restock.php")
      .then((response) => response.json())
      .then((data) => setRestockData(data))
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
          <div className="flex_statistics">
            <div className="head_statistics">Status</div>
            <table className="purple_statistics bottom_ststistics">
              <thead>
                <tr>
                  <th className="th_statistics">SL No.</th>
                  <th className="th_statistics">Name</th>
                  <th className="th_statistics">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td_statistics">1</td>
                  <td className="td_statistics">Product A</td>
                  <td className="td_statistics">80%</td>
                </tr>
                <tr>
                  <td className="td_statistics">2</td>
                  <td className="td_statistics">Product B</td>
                  <td className="td_statistics">60%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tables_statistics">
            <div className="flex_statistics">
              <div className="head_statistics">Restock Items</div>
              <table className="red_statistics bottom_ststistics">
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
      <div />
    </div>
  );
};

export default Statistics;
