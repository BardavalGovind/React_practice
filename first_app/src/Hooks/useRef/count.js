import React, { useState, useMemo } from "react";

function Parent() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Running expensive calculation...");
    // Simulate a CPU-intensive task
    for (let i = 0; i < 1e7; i++) {}
    return num * 2;
  };

  // Memoize the result of the expensive calculation
  const memoizedResult = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>Expensive Calculation</h1>
      <p>Count: {count}</p>
      <p>Value: {value}</p>
      <p>Memoized Result: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setValue(value + 1)}>Increment Value</button>
    </div>
  );
}

export default Parent;
