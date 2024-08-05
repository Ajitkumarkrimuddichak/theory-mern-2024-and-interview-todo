/*What is HOC:- A Higher-Order Component (HOC) is a function that takes a component 
and returns a new component.
*/

import { useState } from "react";

const HigherOrderComponent = (OneParameter) => {
  const HigherOrderComponentInner = () => {
    const [num, setNum] = useState(0);
    function handleEvent() {
      setNum(num + 1);
    }
    return <OneParameter num={num} handleEvent={handleEvent} />;
  };
  return HigherOrderComponentInner;
};

export default HigherOrderComponent;
