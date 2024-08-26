import React from "react";
import './AllocationResults.css';

const AllocationResults = ({ allocation }) => {
  return (
    <div className="allocation-results">
      <h2>Investment Breakdown</h2>
      <ul>
        {Object.entries(allocation).map(([key, value]) => (
          <li key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: ₹{value.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllocationResults;
