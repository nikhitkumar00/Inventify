import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./Stocks.css";

export const Stocks = () => {
  const [stockData, setStockData] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1/I_N_V_O%20Backend/retrieve.php")
      .then((response) => response.json())
      .then((data) => setStockData(data))
      .catch((error) => console.log(error));
  }, []);

  const getTableHeaders = () => {
    if (stockData.length > 0) {
      return Object.keys(stockData[0]).map((key, index) => (
        <th key={index} className="th_STOCKS">
          {key}
        </th>
      ));
    }
    return null;
  };

  const getTableRows = () => {
    return stockData.map((stock, index) => (
      <tr key={index} className="row_stocks">
        {Object.values(stock).map((value, index) => (
          <td key={index} className=".td_STOCKS">
            {value}
          </td>
        ))}
      </tr>
    ));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://127.0.0.1/I_N_V_O%20Backend/add.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .then(toast.success("Data Added Successful"))
      .catch((error) => console.log(error));
  };

  const getFormInputs = () => {
    if (stockData.length > 0) {
      const firstStock = stockData[0];
      return Object.keys(firstStock).map((key, index) => (
        <td key={index} className=".td_STOCKS">
          <input
            type="text"
            placeholder={key}
            name={key}
            id={key}
            className="StocksInput"
            onChange={handleInputChange}
          />
        </td>
      ));
    }
    return null;
  };

  return (
    <div className="Stocks">
      <table className="StocksTable">
        <thead>
          <tr>{getTableHeaders()}</tr>
        </thead>
        <tbody>{getTableRows()}</tbody>
      </table>
      <div>
        <form onSubmit={handleSubmit} className="StocksInputForm">
          <div className="AddTable">
            <div className="formInputStocks">{getFormInputs()}</div>
          </div>
          <div className="StocksBottomTableWrapper">
            <button className="StocksAddButton" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Stocks;
