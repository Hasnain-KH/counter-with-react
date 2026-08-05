import React from "react";
import { useState } from "react";
import "../Counter/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increasecount = () => {
    setCount(count + 1);
  };

  const Decreasecount = () => {
    if (count <= 0) {
      alert("Counter cannot go below 0!");
      return;
    }

    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h4>⚛ React Project</h4>

        <h1>Counter App</h1>

        <div className="counter-number">
          {count}
        </div>

        <div className="btn-group">
          <button className="increase" onClick={Increasecount}>
             Increase
          </button>

          <button className="decrease" onClick={Decreasecount}>
            Decrease
          </button>

          <button className="reset" onClick={Reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;