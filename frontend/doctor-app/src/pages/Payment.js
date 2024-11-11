import React, { useState, useEffect } from 'react';
import "../css/payment.css";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("UPI");
  const [paymentDetails, setPaymentDetails] = useState(null);

  // This will update payment details based on the selected method
  const showPaymentDetails = (method) => {
    if (method === "UPI") {
      setPaymentDetails(
        <div>
          <label>Enter UPI ID:</label>
          <input type="text" placeholder="e.g., yourname@upi" />
        </div>
      );
    } else if (method === "Net Banking") {
      setPaymentDetails(
        <div>
          <label>Select Bank:</label>
          <select>
            <option>SBI</option>
            <option>HDFC</option>
            <option>ICICI</option>
            <option>Axis Bank</option>
            <option>IOB</option>
            <option>Punjab Nationals</option>
            <option>Canara Bank</option>
          </select>
        </div>
      );
    } else if (method === "Card") {
      setPaymentDetails(
        <div>
          <label>Card Number:</label>
          <input type="text" placeholder="1234 5678 9012 3456" />
          <label>Expiry Date:</label>
          <input type="text" placeholder="MM/YY" />
          <label>CVV:</label>
          <input type="password" placeholder="123" />
        </div>
      );
    }
  };

  // Handle payment method selection
  const handlePaymentMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  // Process payment (currently just an alert)
  const processPayment = () => {
    const amount = document.getElementById("amount").innerText;
    alert(`Processing ${selectedMethod} payment of ${amount}`);
  };

  // useEffect hook to show payment details initially based on default method
  useEffect(() => {
    showPaymentDetails(selectedMethod);
  }, [selectedMethod]); // Run whenever selectedMethod changes

  return (
    <div>
      <div className="payment-container">
        <h1>Payment Page</h1>
        <p>
          Amount to be paid: <span id="amount">₹500.00</span>
        </p>

        <div className="payment-method">
          <h2>Select Payment Method</h2>
          <div className="method">
            <label>
              <input
                type="radio"
                name="payment-method"
                value="UPI"
                checked={selectedMethod === 'UPI'}
                onChange={handlePaymentMethodChange}
              />
              UPI
            </label>
            <label>
              <input
                type="radio"
                name="payment-method"
                value="Net Banking"
                checked={selectedMethod === 'Net Banking'}
                onChange={handlePaymentMethodChange}
              />
              Net Banking
            </label>
            <label>
              <input
                type="radio"
                name="payment-method"
                value="Card"
                checked={selectedMethod === 'Card'}
                onChange={handlePaymentMethodChange}
              />
              Credit/Debit Card
            </label>
          </div>
        </div>

        <div id="payment-details">{paymentDetails}</div>

        <button onClick={processPayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default Payment;
