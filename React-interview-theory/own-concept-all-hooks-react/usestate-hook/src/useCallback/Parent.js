import React, { useCallback, useEffect, useState } from "react";
const Child = ({ getItems }) => {
  useEffect(() => {
    console.log("UseEffect");
  }, [getItems]);
  return (
    <div>
      <h1>Ajit</h1>
    </div>
  );
};

const Parent = () => {
  const [number, setNumber] = useState(0);
  const [counterTow, setCounterTwo] = useState(0);

  const getItems = useCallback(() => {
    return [number];
  }, [number]);

  return (
    <div>
      <input type="text" onClick={(e) => setNumber(e.target.value)} />
      <Child getItems={getItems} />
      <button onClick={() => setCounterTwo(counterTow + 1)}>
        counterTow - {counterTow}
      </button>
    </div>
  );
};

export default Parent;
