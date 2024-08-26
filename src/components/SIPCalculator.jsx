import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Link } from "react-router-dom";
import "./SIPCalculator.css";

const SIPCalculator = () => {
  const [monthlyAmount, setMonthlyAmount] = useState('');
  const [rateOfReturn, setRateOfReturn] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [result, setResult] = useState(null);
  const [totalInvestment, setTotalInvestment] = useState(null);
  const [returnAmount, setReturnAmount] = useState(null);

  const COLORS = ['#0088FE', '#00C49F'];

  const calculateSIP = () => {
    if (!monthlyAmount || !rateOfReturn || !timePeriod) {
      alert("Please fill in all fields");
      return;
    }
    
    if (monthlyAmount <= 0 || rateOfReturn <= 0 || timePeriod <= 0) {
      alert("Please enter positive values");
      return;
    }

    const monthlyRate = rateOfReturn / 100 / 12;
    const months = timePeriod * 12;
    const sipValue = (monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)) * (1 + monthlyRate);
    const investedAmount = monthlyAmount * months;

    setResult(sipValue.toFixed(2));
    setTotalInvestment(investedAmount);
    setReturnAmount((sipValue - investedAmount).toFixed(2));
  };

  const data = [
    { name: "Total Investment", value: totalInvestment || 0 },
    { name: "Return", value: (result - totalInvestment) || 0 },
  ];

  return (
    <div className="sip-calculator">
      <img src="./src/assets/images.jpg" alt="SIP Calculator" className="calculator-image" />
      <h2>SIP Calculator</h2>
      <div className="form">
        <label htmlFor="monthlyAmount">Monthly Amount (₹): </label>
        <input
          id="monthlyAmount"
          type="number"
          value={monthlyAmount}
          onChange={(e) => setMonthlyAmount(e.target.value)}
          aria-label="Monthly Amount"
          min="0"
        />

        <label htmlFor="rateOfReturn">Expected Rate of Return (%): </label>
        <input
          id="rateOfReturn"
          type="number"
          value={rateOfReturn}
          onChange={(e) => setRateOfReturn(e.target.value)}
          aria-label="Rate of Return"
          min="0"
        />

        <label htmlFor="timePeriod">Time Period (Years): </label>
        <input
          id="timePeriod"
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          aria-label="Time Period"
          min="0"
        />

        <button onClick={calculateSIP} aria-label="Calculate SIP">Calculate SIP</button>
      </div>

      {result !== null && (
        <div className="result">
          <div className="chart">
            <PieChart width={500} height={300}>
              <Pie
                data={data}
                cx={250}
                cy={150}
                innerRadius={70}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
          
          <p>Total Investment: ₹{totalInvestment}</p>
          <p>Future Value of SIP: ₹{result}</p>
          <p>Return on Investment: ₹{returnAmount}</p>
        </div>
      )}
      <div className="link">
        <Link to="/" className="nav-link">Go to Personal Finance</Link>
      </div>
    </div>
  );
};

export default SIPCalculator;
