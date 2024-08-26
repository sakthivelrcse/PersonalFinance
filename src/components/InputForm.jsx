import React, { useState } from "react";
import './InputForm.css';

const InputForm = ({ setInvestment, onSubmit }) => {
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(amount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Investment Amount (₹): </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button type="submit">Allocate</button>
    </form>
  );
};

export default InputForm;
