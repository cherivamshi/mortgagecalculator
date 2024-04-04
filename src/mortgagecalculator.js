import React, { useState } from 'react';
import './App.css';
import Input from './Input';
import Label from './Label';


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
         <Label
         htmlFor={purchasePrice}
         name="purchasePrice"
         />
          <Input
          type="number"
          id="purchase-price"
          value={purchasePrice}
          onChange={setPurchasePrice}
           // type="number"
           // id="purchase-price"
           // value={purchasePrice}
           // onChange={(e) => setPurchasePrice(parseFloat(e.target.value))}
          />
          </div>
          </div>
           <div className="input-row">
        <div className="input-container">
        <Label
         htmlFor={DownPayment}
         name="DownPayment"
         />         
          <Input
          type="number"
          id="DownPayment"
          value={DownPayment}
          onChange={setDownPayment}
            //type="number"
            //id="DownPayment"
            //value={DownPayment}
            //onChange={(e) => setDownPayment(parseFloat(e.target.value))}
          />
          </div>
          </div>
           <div className="input-row">
        <div className="input-container">
        <Label
         htmlFor={RePaymenttime}
         name="RePaymenttime"
         />            
           <Input
            type="number"
            id="RePaymenttime"
            value={RePaymenttime} years
            min={1}
            max={30}
           onChange={setRePaymenttime}
            //onChange={(e) => setRePaymenttime(parseFloat(e.target.value))}
            
            />
           
           <Label
         htmlFor={RePaymenttime}
         name="Years"
         />             
          </div>
            </div>
      

          <div className="input-row">
        <div className="input-container">
        <Label
         htmlFor={Intrestrate}
         name="Intrest rate"
         />              <Input
            type="number"
            id="xyz"
            value={Intrestrate}
           min={0}
           max={30}
           onChange={setIntrestrate}
            //onChange={(e) => setIntrestrate(parseFloat(e.target.value))}
          />
<Label
         htmlFor={Intrestrate}
         name="%"
         />          
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
