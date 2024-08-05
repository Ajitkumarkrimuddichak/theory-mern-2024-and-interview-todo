import React, { useState } from "react";

const ReanderProps = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return <div>{props.render(increment, count)}</div>;
};

export default ReanderProps;
