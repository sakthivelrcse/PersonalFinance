import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import InputForm from "./components/InputForm";
import AllocationResults from "./components/AllocationResults";
import SIPCalculator from "./components/SIPCalculator";
import financeImage from "./assets/images.jpg"; // Import the image
import "./App.css";

function PersonalFinance() {
  const [investment, setInvestment] = React.useState(0);
  const [allocation, setAllocation] = React.useState({});

  const calculateAllocation = (amount) => {
    setInvestment(amount);
    setAllocation({
      stocks: amount * 0.3,
      mutualFunds: amount * 0.2,
      bonds: amount * 0.1,
      ETF: amount * 0.15,
      FixedDeposit: amount * 0.1,
      RecurringDdeposit: amount * 0.05,
      savings: amount * 0.1,
    });
  };

  return (
    <div className="personal-finance">
      <img src={financeImage} alt="Finance Overview" className="header-image" /> {/* Insert the image */}
      <h1>Personal Finance Planner</h1>
      <InputForm setInvestment={setInvestment} onSubmit={calculateAllocation} />
      {investment > 0 && <AllocationResults allocation={allocation} />}
      <div className="link">
        <Link to="/sip-calculator" className="nav-link">Go to SIP Calculator</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalFinance />} />
        <Route path="/sip-calculator" element={<SIPCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
