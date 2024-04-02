import React, { useState } from 'react';
import './App.css';

const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [DownPayment, setDownPayment] = useState(0);


  return (
    <div className="mortgage-calculator">
      <h2>Mortgage Calculator</h2>
      <div className="input-row">
        <div className="input-container">
          <label htmlFor="purchase-price">Purchase Price:</label>
          <input
            type="number"
            id="purchase-price"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}
          />
           <div className="input-row">
        <div className="input-container">
          <label htmlFor="DownPayment">DownPayment:</label>
          <input
            type="number"
            id="DownPayment"
            value={DownPayment}
            onChange={(e) => setDownPayment(parseFloat(e.target.value))}
          />
        </div>
        </div>
        </div>
        </div>
        </div>
        
  
  );
};

export default MortgageCalculator;
