import React, { useState } from 'react';
import './App.css';

const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [repaymentTime, setRepaymentTime] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleCalculate = () => {
    const loanAmount = purchasePrice - downPayment;
    setLoanAmount(loanAmount);

    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = repaymentTime * 12;

    const monthlyPayment =
      loanAmount *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="mortgage-calculator">
      <h2>Mortgage Calculator</h2>
      <div className="input-row">
        <div className="input-container">
          <label htmlFor="purchase-price">Purchase Price:</label>
          <input
            type="range"
            min="0"
            max="1000000"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}
            style={{
              background: `linear-gradient(to right, purple ${purchasePrice / 10000}%, #ddd ${purchasePrice / 10000}%)`
            }}
          />
          <input
            type="number"
            id="purchase-price"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-container">
          <label htmlFor="down-payment">Down Payment:</label>
          <input
            type="range"
            min="0"
            max="100000"
            value={downPayment}
            onChange={(e) => setDownPayment(parseFloat(e.target.value))}
            style={{
              background: `linear-gradient(to right, purple ${downPayment / 1000}%, #ddd ${downPayment / 1000}%)`
            }}
          />
          <input
            type="number"
            id="down-payment"
            value={downPayment}
            onChange={(e) => setDownPayment(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-container">
          <label htmlFor="repayment-time">Repayment Time (years):</label>
          <input
            type="range"
            min="0"
            max="30"
            value={repaymentTime}
            onChange={(e) => setRepaymentTime(parseFloat(e.target.value))}
            style={{
              background: `linear-gradient(to right, purple ${repaymentTime * 3.33}%, #ddd ${repaymentTime * 3.33}%)`
            }}
          />
          <input
            type="number"
            id="repayment-time"
            value={repaymentTime}
            onChange={(e) => setRepaymentTime(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-container">
          <label htmlFor="interest-rate">Interest Rate (%):</label>
          <input
            type="range"
            min="0"
            max="30"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            style={{
              background: `linear-gradient(to right, purple ${interestRate * 3.33}%, #ddd ${interestRate * 3.33}%)`
            }}
          />
          <input
            type="number"
            id="interest-rate"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        <h3>Loan Amount: ₹{loanAmount}</h3>
        <h3>Monthly Payment: ₹{monthlyPayment}</h3>
      </div>
    </div>
  );
};

export default MortgageCalculator;
