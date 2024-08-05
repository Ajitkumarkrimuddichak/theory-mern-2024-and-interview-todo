import React, { useState } from "react";
const CountIncreDecrem = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>

      <button className="btn" onClick={increment}>
        Increment
      </button>
      <span>
        <p>Count: {count}</p>
      </span>
      <button className="btn" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default CountIncreDecrem;
