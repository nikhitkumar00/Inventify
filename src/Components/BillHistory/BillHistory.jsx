import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
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
      const response = await fetch("http://127.0.0.1/I_N_V_O%20Backend/billlog.php");
      const data = await response.json();
      setBills(data);
    } catch (error) {
      console.error("Error fetching bills:", error);
    }
  };

  const fetchBillItems = async (billId) => {
    try {
      const response = await fetch(`API_ENDPOINT_FOR_BILL_ITEMS/${billId}`);
      const data = await response.json();
      setBillItems(data.items);
      calculateTotalAmount(data.items);
    } catch (error) {
      console.error("Error fetching bill items:", error);
    }
  };

  const calculateTotalAmount = (items) => {
    const total = items.reduce((acc, item) => acc + item.amount, 0);
    setTotalAmount(total);
  };

  const handleAccordionItemClick = async (billId) => {
    if (selectedBill === billId) {
      setSelectedBill(null);
    } else {
      setSelectedBill(billId);
      await fetchBillItems(billId);
    }
  };

  return (
    <div>
      <Accordion>
        {bills.map((bill) => (
          <AccordionItem key={bill.bill_id}>
            <AccordionItemHeading>
              <AccordionItemButton onClick={() => handleAccordionItemClick(bill.bill_id)}>
                {bill.bill_id} - {bill.purchase_date} - Total Amount: {bill.total_amount}
              </AccordionItemButton>
            </AccordionItemHeading>
            {selectedBill === bill.bill_id && (
              <AccordionItemPanel>
                <table>
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Total Amount: {totalAmount}</p>
              </AccordionItemPanel>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default BillHistory;
