import "./Statistics.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCash } from "react-icons/tb";
import { TbPigMoney } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { useState, useEffect } from "react";

const Statistics = () => {
  const [restockData, setRestockData] = useState([]);
  const [expiryData, setExpiryData] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [profit, setProfit] = useState(0);
  const [expense, setExpense] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    fetch("http://127.0.0.1/I_N_V_O%20Backend/restock.php")
      .then((response) => response.json())
      .then((data) => setRestockData(data))
      .catch((error) => console.log(error));

    fetch("http://127.0.0.1/I_N_V_O%20Backend/expiry.php")
      .then((response) => response.json())
      .then((data) => setExpiryData(data))
      .catch((error) => console.log(error));

    fetch("http://127.0.0.1/I_N_V_O%20Backend/totalorders.php")
      .then((response) => response.text())
      .then((data) => setTotalOrders(parseInt(data)))
      .catch((error) => console.log(error));
      
    fetch("http://127.0.0.1/I_N_V_O%20Backend/profit.php")
        .then((response) => response.text())
        .then((data) => setProfit(parseFloat(data)))
        .catch((error) => console.log(error));
    
    fetch("http://127.0.0.1/I_N_V_O%20Backend/expense.php")
        .then((response) => response.text())
        .then((data) => setExpense(parseFloat(data)))
        .catch((error) => console.log(error));
  }, []);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
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
            <div className="info_statistics">Profit</div>
            <div className="statistics_icons">
              <div>
                <TbPigMoney className="statistics_logos" />
              </div>
              <div className="info-data_statistics">{profit}</div>
            </div>
          </div>

          <div className="data-child_statistics blue_statistics">
            <div className="info_statistics">Total Expense</div>
            <div className="statistics_icons">
              <div>
                <TbCash className="statistics_logos" />
              </div>
              <div className="info-data_statistics">{expense}</div>
            </div>
          </div>

          <div className="data-child_statistics yellow_statistics">
            <div className="info_statistics">Total Orders</div>
            <div className="statistics_icons">
              <div>
                <AiOutlineShoppingCart className="statistics_logos" />
              </div>
              <div className="info-data_statistics">{totalOrders}</div>
            </div>
          </div>

          <div className="data-child_statistics purple_statistics">
            <div className="info_statistics">Date</div>
            <div className="statistics_icons">
              <div>
                <MdDateRange className="statistics_logos" />
              </div>
              <div className="info-data_statistics">{currentTime}</div>
            </div>
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
              <tbody>{expiryTable()}</tbody>
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
