import React, { useEffect, useState } from "react";

const UseEffectCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `chats (${count})`;
  });
  console.log("Hello outside");

  return (
    <div>
      <h4>UseEffect Hook Count</h4>
      <h1>{count}</h1>
      <button className="bg-danger" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default UseEffectCount;
