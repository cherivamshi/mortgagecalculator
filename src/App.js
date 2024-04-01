import React from 'react';
import './App.css';
import MortgageCalculator from './mortgagecalculator'; // Make sure to provide the correct path to your MortgageCalculator component

function App() {
  return (
    <div className="App">
      {/* Render the MortgageCalculator component */}
      <MortgageCalculator />
    </div>
  );
}

export default App;
