import React, { useState, useEffect } from "react";
import "./Billing.css";

var inputStyle = {
  input: {
    border: "1px solid black",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    fontSize: "15px",
    backgroundColor: "var(--inputf)",
    color: "var(--tar)",
    placeholder: "var(--place)",
  },
  input1: {
    border: "1px solid black",
    borderRadius: "10px",
    padding: "15px",
    flexGrow: "1",
    margin: "10px",
    backgroundColor: "var(--inputf)",
    color: "var(--tar)",
    fontSize: "15px",
    maxWidth: "500px",
  },
};

const Billing = () => {
  const [productName, setProductName] = useState("");
  const [itemId, setItemId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [expiry, setExpiry] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    if (productName) {
      fetch(`http://127.0.0.1/I_N_V_O%20Backend/billingsearch.php?productName=${productName}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            const fetchedData = data.data;
            setItemId(fetchedData.item_id);
            setQuantity(fetchedData.quantity);
            setUnitPrice(fetchedData.cost_price);
            setExpiry(fetchedData.expiry_date);
            setTotal(fetchedData.mrp);
          } else {
            console.error("Error fetching data from API:", data.message);
          }
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    }
  }, [productName]);

  const handleProductChange = (event) => {
    setProductName(event.target.value);
  };

  return (
    <div className="BillingContainer">
      <div className="BillingHeader">Billing</div>
      <div className="BillingContainerChild1">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "2",
            backgroundColor: "var(--sea)",
            borderRadius: "10px",
            marginRight: "20px",
            padding: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Name of the product"
            style={inputStyle.input}
            value={productName}
            onChange={handleProductChange}
          />
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                placeholder="Item Id"
                style={inputStyle.input}
                value={itemId}
                readOnly
              />
              <input
                type="text"
                placeholder="Qty"
                style={inputStyle.input}
                value={quantity}
                readOnly
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="text"
                placeholder="Unit Price"
                style={inputStyle.input}
                value={unitPrice}
                readOnly
              />
              <input
                type="text"
                placeholder="Expiry"
                style={inputStyle.input}
                value={expiry}
                readOnly
              />
            </div>
            <div className="Inner_Child_1">
              <input
                type="input"
                placeholder="Total"
                style={inputStyle.input1}
                value={total}
                readOnly
              />
              <div className="Product_Add_Button_div">
                <input
                  type="button"
                  value="Add"
                  className="Product_Add_Button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="BillingTable">
        <table className="TableBody">
          <thead>
            <tr>
              <th className="th_billingtable">Sl.no</th>
              <th className="th_billingtable">Name</th>
              <th className="th_billingtable">Expiry</th>
              <th className="th_billingtable">Qty</th>
              <th className="th_billingtable">Rate</th>
              <th className="th_billingtable">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Table body rows */}
          </tbody>
          <tfoot>
            <tr>
              <td className="td_billingtable"></td>
              <td className="td_billingtable"></td>
              <td className="td_billingtable"></td>
              <td className="td_billingtable"></td>
              <td className="td_billingtable"></td>
              <td className="td_billingtable">Total</td>
              <td className="td_billingtable">Data</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Billing;
