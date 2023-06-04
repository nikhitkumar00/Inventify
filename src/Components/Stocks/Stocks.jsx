import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import "./Stocks.css";

export const Stocks = () => {
  const [stockData, setStockData] = useState([]);
  const [formData, setFormData] = useState({});
  const [refreshTable, setRefreshTable] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1/I_N_V_O%20Backend/retrieve.php")
      .then((response) => response.json())
      .then((data) => setStockData(data))
      .catch((error) => console.log(error));
  }, [refreshTable]);

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
          <td key={index} className="td_STOCKS">
            {value}
          </td>
        ))}
        <td className="td_icon_stocks">
          <AiOutlineDelete onClick={() => handleDeleteRow(stock.item_id, index)} />
        </td>
      </tr>
    ));
  };

  const handleDeleteRow = (rowId, index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this row?");
    if (confirmDelete) {
      const updatedStockData = [...stockData];
      updatedStockData.splice(index, 1);
      setStockData(updatedStockData);
  
      fetch(`http://127.0.0.1/I_N_V_O%20Backend/deleterow.php?rowId=${rowId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          toast.success("Row deleted successfully");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error occurred while deleting the row");
        });
    }
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
        setRefreshTable(!refreshTable);
      })
      .then(toast.success("Data Added Successfully"))
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
          <tr>{getTableHeaders()}
          </tr>
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
