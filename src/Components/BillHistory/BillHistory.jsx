import React, { useEffect, useState } from "react";
import "./BillHistory.css";

const BillHistory = () => {
  const [bills, setBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);
  const [billItems, setBillItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1/I_N_V_O%20Backend/billlog.php"
      );
      const data = await response.json();
      setBills(data);
    } catch (error) {
      console.error("Error fetching bills:", error);
    }
  };

  const fetchBillItems = async (billId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1/I_N_V_O%20Backend/billitemslog.php?billId=${billId}`
      );
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setBillItems(data);
      calculateTotalAmount(data);
    } catch (error) {
      console.error("Error fetching bill items:", error);
    }
  };

  const calculateTotalAmount = (items) => {
    const total = items.reduce((acc, item) => acc + parseFloat(item.amount), 0);
    setTotalAmount(total);
  };

  const handleBillClick = async (billId) => {
    if (selectedBill === billId) {
      setSelectedBill(null);
    } else {
      setSelectedBill(billId);
      await fetchBillItems(billId);
    }
  };

  return (
    <div className="billwrapper">
      <h1 className="bill-heading">Bill History</h1>
      <div className="bill-container">
        {bills.map((bill) => (
          <div key={bill.bill_id} className="bill-item">
            <div
              className="bill-header"
              onClick={() => handleBillClick(bill.bill_id)}
            >
              <div className="bill-info">
                <div className="bill-id">Bill No. {bill.bill_id}</div>
                <div className="bill-date">
                  Purchase Date: {bill.purchase_date}
                </div>
                <div className="bill-amount">
                  Total Amount: {bill.total_amount}
                </div>
                <div className="bill-toggle">
                  {selectedBill === bill.bill_id ? "-" : "+"}
                </div>
              </div>
            </div>
            {selectedBill === bill.bill_id && (
              <div className="bill-details">
                <table className="bill-table">
                  <thead>
                    <tr>
                      <th className="bill-table-header">Item Name</th>
                      <th className="bill-table-header">Quantity</th>
                      <th className="bill-table-header">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billItems.length > 0 ? (
                      billItems.map((item, index) => (
                        <tr key={item.name + index}>
                          <td className="bill-row">{item.name}</td>
                          <td className="bill-row">{item.bill_quantity}</td>
                          <td className="bill-row">{item.amount}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3">No items found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <p>Total Amount: {totalAmount}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillHistory;
