import React from "react";
import { useState } from "react";
import Counter from "./Counter";
const A = (props) => {
  const { count, increment, name } = props;
  return (
    <div>
      <button onClick={increment}>
        {name} 👍 {count} 👍 Click Me
      </button>
    </div>
  );
};

export default Counter(A, 2);
