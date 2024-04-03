import React, { useState } from 'react';
import './App.css';

const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [DownPayment, setDownPayment] = useState(0);
  const [RePaymenttime, setRePaymenttime] = useState(0);
  const [Intrestrate, setIntrestrate] = useState(0);
  const [LoanAmount,setLoanAmount] = useState(0);
  const [MonthlyPayment,SetMonthlyPayment]= useState(0);



  const calculatedLoanAmount = () => {
    return purchasePrice - DownPayment;
  };
  const calculatedMonthlyPayment = () => {
    const r = Intrestrate/ 1200;
    const n = RePaymenttime * 12;
    const numerator = r * (1 + r) ** n;
    const denominator = ((1 + r) ** n) - 1;
    const mortgagePayment = calculatedLoanAmount  () * (numerator / denominator);
    SetMonthlyPayment(mortgagePayment || 0);
    
  };



  


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
          </div>
          </div>
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
           <div className="input-row">
        <div className="input-container">
          <label htmlFor="RePaymenttime">RePaymenttime</label>
          <input
            type="number"
            
            id="RePaymenttime"
            value={RePaymenttime} years
            min={1}
            max={30}

            onChange={(e) => setRePaymenttime(parseFloat(e.target.value))}
            
            />
           
          <label htmlFor="RePaymenttime"> years</label>
          </div>
            </div>
      

          <div className="input-row">
        <div className="input-container">
          <label htmlFor="Intrestrate">Intrestrate:</label>
          <input
            type="number"
            id="Intrestrate"
            value={Intrestrate}
           min={0}
           max={30}
            onChange={(e) => setIntrestrate(parseFloat(e.target.value))}
          />
          <label htmlFor="Intrestrate"> %</label>
          </div>
          </div>

          <div className="input-row">
          <div>LoanAmount: {calculatedLoanAmount()}</div>
            
        </div>
        <div className="input-row">
        <div>Estimated Monthly Payment: {MonthlyPayment}</div>
      </div>
      <button onClick={calculatedMonthlyPayment}>Calculate</button>
    </div>

        
          
    
        
  
  );
};

export default MortgageCalculator;
