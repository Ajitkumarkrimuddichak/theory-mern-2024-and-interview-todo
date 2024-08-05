import React, { useState } from "react";

const Counter = (WrappedComponent, num) => {
  const Counter = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + num);
    };

    return (
      <div>
        <WrappedComponent count={count} increment={increment} {...props} />
      </div>
    );
  };
  return Counter;
};

export default Counter;
