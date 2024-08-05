import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i <= 20000000) i++;
    if (counterOne % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }, [counterOne]);

  return (
    <div>
      <button onClick={() => setCounterOne(counterOne + 1)}>
        counterOwo - {counterOne}
      </button>
      <h1>{isEven}</h1>
      <button onClick={() => setCounterTwo(counterTwo + 1)}>
        counterTwo - {counterTwo}
      </button>
    </div>
  );
};

export default UseMemoHook;
