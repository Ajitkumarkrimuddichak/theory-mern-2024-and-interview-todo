import React, { useState } from "react";
import Counter from "./Counter";
const B = (props) => {
  const { count, increment, name } = props;
  return (
    <div>
      <button onMouseOver={increment}>
        {name} 👍 {count} 👍 Mouse Over
      </button>
    </div>
  );
};

export default Counter(B, 5);
