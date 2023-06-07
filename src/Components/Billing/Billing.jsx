import React, { useState, useEffect, useRef } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import "./Billing.css";

const inputStyle = {
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
  const productNameRef = useRef(null);
  const quantityRef = useRef(null);
  const addButtonRef = useRef(null);

  useEffect(() => {
    productNameRef.current.focus();
  }, []);

  const [productName, setProductName] = useState("");
  const [itemId, setItemId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [total, setTotal] = useState("");
  const [tableData, setTableData] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [billId, setBillId] = useState("");

  useEffect(() => {
    if (productName) {
      fetch(
        `http://127.0.0.1/I_N_V_O%20Backend/billingsearch.php?productName=${productName}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            const fetchedData = data.data;
            setItemId(fetchedData.item_id);
            setUnitPrice(fetchedData.mrp);
            setTotal(fetchedData.total);
          } else {
            console.error("Error fetching data from API:", data.message);
          }
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    }
  }, [productName]);

  useEffect(() => {
    fetch("http://127.0.0.1/I_N_V_O%20Backend/billid.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setBillId(data.billId);
        } else {
          console.error("Error fetching Bill ID from API:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching Bill ID from API:", error);
      });
  }, []);

  const handleProductChange = (event) => {
    setProductName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
    if (newQuantity !== "" && !isNaN(newQuantity) && newQuantity > 0) {
      const newTotal = newQuantity * unitPrice;
      setTotal(newTotal);
    } else {
      setTotal("");
    }
  };

  const handleEnterKey = (event, ref) => {
    if (event.key === "Enter") {
      event.preventDefault();
      ref.current.focus();
    }
  };

  const handleAddClick = () => {
    if (productName === "") {
      toast.info("Enter product name");
      return;
    }
    if (quantity === "") {
      toast.info("Enter quantity value");
      return;
    } else if (quantity <= 0) {
      toast.info("Enter valid quantity value");
      return;
    }

    const newData = {
      productName,
      itemId,
      quantity,
      unitPrice,
      total: quantity * unitPrice,
    };

    fetch(
      `http://127.0.0.1/I_N_V_O%20Backend/addbillitem.php?billId=${billId}&itemId=${itemId}&quantity=${quantity}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("API request successful");
          setTableData([...tableData, newData]);
          setProductName("");
          setItemId("");
          setQuantity("");
          setUnitPrice("");
          setTotal("");
          productNameRef.current.focus();
        } else {
          toast.error("Insufficient Stocks Available");
        }
      })
      .catch((error) => {
        console.error("Error calling API:", error);
        toast.error("Insufficient Stocks Available");
      });
  };

  useEffect(() => {
    let total = 0;
    tableData.forEach((data) => {
      total += data.total;
    });
    setGrandTotal(total);
  }, [tableData]);

  const handleDeleteRow = (rowId, index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this row?"
    );
    if (confirmDelete) {
      const updatedTableData = [...tableData];
      const deletedRow = updatedTableData[index];
      updatedTableData.splice(index, 1);
      setTableData(updatedTableData);

      fetch(
        `http://127.0.0.1/I_N_V_O%20Backend/deletebillitem.php?billId=${billId}&itemId=${deletedRow.itemId}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            toast.success("Row deleted successfully");
          } else {
            toast.error("Failed to delete row");
            setTableData([...tableData, deletedRow]);
          }
        })
        .catch((error) => {
          console.error("Error calling API:", error);
          toast.error("Failed to delete row");
          setTableData([...tableData, deletedRow]);
        });
    }
  };

  const handleAddBill = () => {
    toast.success("Bill Added Successfully");
    window.location.reload();
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
            autoFocus
            ref={productNameRef}
            onKeyDown={(e) => handleEnterKey(e, quantityRef)}
          />
          <div style={{ display: "flex" }}>
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
                onChange={handleQuantityChange}
                ref={quantityRef}
                onKeyDown={(e) => handleEnterKey(e, addButtonRef)}
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
                placeholder="Bill Id"
                style={inputStyle.input}
                value={billId}
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
                  onClick={handleAddClick}
                  ref={addButtonRef}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="BillingTable">
        <div className="TableBodyContainer">
          <table className="TableBody">
            <thead>
              <tr>
                <th className="th_billingtable">Sl.no</th>
                <th className="th_billingtable">Name</th>
                <th className="th_billingtable">Quantity</th>
                <th className="th_billingtable">Unit Price</th>
                <th className="th_billingtable">Total</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td className="billing_rows">{index + 1}</td>
                  <td className="billing_rows">{data.productName}</td>
                  <td className="billing_rows">{data.quantity}</td>
                  <td className="billing_rows">{data.unitPrice}</td>
                  <td className="billing_rows">{data.total}</td>
                  <td className="td_icon_stocks">
                    <AiOutlineDelete
                      onClick={() => handleDeleteRow(data.itemId, index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="total_billing">
          <div className="TotalContainer">
            <h2>Total : {grandTotal}</h2>
          </div>
          <div className="btnContainer">
            <button className="Bill_Add_Button" onClick={handleAddBill}>Add Bill</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
